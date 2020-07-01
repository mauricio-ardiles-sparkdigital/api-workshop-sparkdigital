#!/usr/bin/env bash
echo "-----------------------------------------------"
echo "------- Checking Wiremock settings. -----------"
echo "-----------------------------------------------"


if [[ "$PWD" =~ commands ]];
then
echo "Going to root folder"
cd ..
fi


#check if mock server folder exist
if [ ! -d wiremock_server ];
then
echo "------- Creating wiremock_server folder. ------"
mkdir wiremock_server
chmod +x wiremock_server
fi


#go to the mock server folder
cd wiremock_server


#chek if wiremock standalone file exist
if [ -f wiremock.jar ];
then
echo "------- Wiremock Already installed. -----------"
else
# file doesn´t exist
echo "------- Downloading wiremock-standalone. ------"
curl -o wiremock.jar https://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-jre8-standalone/2.26.3/wiremock-jre8-standalone-2.26.3.jar
fi

echo "-----------------------------------------------"
echo "------- Starting wiremock server. -------------"
echo "-----------------------------------------------"


echo "Setting wiremock in port: 9999"
chmod +x wiremock.jar
java -jar wiremock.jar --port 9999 --verbose
