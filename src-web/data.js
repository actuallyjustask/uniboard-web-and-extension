import * as firebase from "firebase/app";
import '@firebase/firestore';
import he from "he";
import { transform } from "lodash";
import { isChrome } from "react-device-detect";

class Database {
  constructor() {
    let config = {
      apiKey: "AIzaSyDummAaSk7h1T1AuC2BsU8zhTAH3H4tVNg",
      authDomain: "uniboard.app",
      databaseURL: "https://synopsis-465b0.firebaseio.com",
      projectId: "synopsis-465b0",
      storageBucket: "synopsis-465b0.appspot.com",
      messagingSenderId: "1062729892729"
    };
    firebase.initializeApp(config);

    firebase.firestore().enablePersistence()

    this.db = firebase.firestore();

    //firebase.auth().onAuthStateChanged(this.changeAuthState);
  }

  async createDataDictFromDatabaseId(databaseId) {
    let rawData = await this._getDictFromDatabaseId(databaseId);
    if (rawData) {
      delete rawData["date"];
      this.settings = rawData["userSettings"];
      delete rawData["userSettings"];
      let dict = {};
      for (const courseName in rawData) {
        const courseDict = rawData[courseName];
        dict[courseName] = this._parseCourse(courseDict);
      }
      return dict;
    }
    return false;
  }

  async createRealtimeDataDictFromDatabaseId(databaseId) {
    this.databaseRef = await this._getRealtimeRefFromDatabaseId(databaseId);
    return this;
  }

  getSubjectNames(){
    if (typeof this.settings !== "undefined" && typeof this.settings.unittitles !== "undefined"){
      return this.settings.unittitles
    }
    return {}
  }

  onUpdate(func, noData) {
    this.databaseRef.onSnapshot(doc => {
      let rawData = doc.data();
      if (rawData) {
        delete rawData["date"];
        this.settings = rawData["userSettings"]?rawData['userSettings']:{};
        delete rawData["userSettings"];
        let dict = {};
        for (const courseName in rawData) {
          const courseDict = rawData[courseName];
          dict[courseName] = this._parseCourse(courseDict);
        }
        func(dict);
      } else {
        noData();
      }
    });
  }

  async getDatabaseIdFromUserId(uid) {
    let id = await this.db
      .collection("authidLinking")
      .doc(uid)
      .get();
    return id.data().databaseID;
  }

  getAllAttachments(branchData) {
    let allAttachments = branchData.assignments
      .concat(branchData.files)
      .concat(branchData.folders)
      .concat(branchData.forums)
      .concat(branchData.links)
      .concat(branchData.quizzes);
    return allAttachments;
  }

  transformToFlatDict(data) {
    let dataArray = [];
    transform(data, (_, value, key) => {
      let subject = this.shortenName(key);
      transform(value, (_, value, key) => {
        let allAttachments = this.getAllAttachments(value);
        allAttachments.map((value, key) => {
          value["subject"] = (subject);
          value['searchString'] = `${subject} ${value.name} ${subject}`
          dataArray.push(value);
        });
      });
    });
    return dataArray;
  }

  updateUserPreferences(key, value) {
   return {}
  }

  getUserPreferences(){
    return {}
  }
  
  getBuildType(){
    return 'web'
  }

  _parseCourse(courseDict) {
    let weeks = {};
    for (const id in courseDict) {
      const item = courseDict[id];
      if (id.startsWith("expandable")) {
        let items = item["children"].map(link_id =>
          this.__parseLink(courseDict[link_id])
        );
        let week = {
          name: he.decode(item["text"]),
          files: items.filter(x => x.linktype === "File"),
          folders: items.filter(x => x.linktype === "Folder"),
          assignments: items.filter(x => x.linktype === "Assignment"),
          quizzes: items.filter(x => x.linktype === "Quiz"),
          forums: items.filter(x => x.linktype === "Forum"),
          links: items.filter(
            x =>
              !["File", "Folder", "Quiz", "Assignment", "Forum"].includes(
                x.linktype
              )
          ),
          link: item['link'],
          type: "week"
        };

        weeks[id] = week;
      }
    }
    return weeks;
  }

  __parseLink(linkDict) {
    let dict = {
      name: he.decode(linkDict["text"]),
      url: linkDict["link"],
      type: "link",
      linktype: linkDict["imgAlt"], // use alt-text
      iconLink: linkDict["img"]
    };
    return dict;
  }

  async _getDictFromDatabaseId(databaseId) {
    let x = await this.db
      .collection("dba")
      .doc(databaseId)
      .get();
    return x.data();
  }

  async _getRealtimeRefFromDatabaseId(databaseId) {
    let x = await this.db.collection("dba").doc(databaseId);
    return x;
  }

  setAuthStateChangedCallback(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  shortenName(nameOfSubject) {
    var matches = nameOfSubject.match(/\w{3}\d{4}/g);
    if (matches != null) {
      nameOfSubject = matches[0];
    }
    return nameOfSubject;
  }
}

const database = new Database();
//  Object.freeze(database);
export default database;
