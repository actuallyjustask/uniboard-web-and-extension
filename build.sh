BUILD_TYPE='extension'
echo "Building $BUILD_TYPE"
if [ "$BUILD_TYPE" == "extension" ]
then
cp -R ./src-extension ./src
cp -R ./public-extension ./public
else
cp -R ./src-web ./src
cp -R ./public-web ./public
fi
react-scripts build