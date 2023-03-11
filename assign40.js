var trackCount = 0;
function make_album(addObject, addartistName, addalbumTitle) {
    const $addObject = {
        artistName: addartistName,
        albumTitle: addalbumTitle
    };
    console.log("Album : " + addObject);
    console.log("Artist Name : " + addartistName);
    console.log("Album Title : " + addalbumTitle);
    trackCount++;
}
make_album("Album1", "Faraz", "Song1");
make_album("Album2", "Eminem", "Survival");
make_album("Album3", "Kesha", "Tik Tok");
allTracks();
function allTracks() {
    console.log("Total Tracks = " + trackCount);
}
//# sourceMappingURL=assign40.js.map