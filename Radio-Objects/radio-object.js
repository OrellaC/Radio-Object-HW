// Complete the following in your .js file
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

const stations = {

    stationObjects: [
        {
            name: "Hot 97.1",
            songs:[{
                title: "For The Night",
                artist: "Pop Smoke"}]
        },
        {
            name: "Power 105.1",
            songs:[{
                title: "Industry Baby",
                artist: "Lil Nas X"}]
        },
        {
            name: "KISS-FM 96.1",
            songs:[{
                title: "All I Want For Christmas is You",
                artist: "Mariah Carey"}]
        }],

song(){
const randomStations = Math.floor(Math.random() * stations.stationObjects.length);
const randomSongs = Math.floor(Math.random() * stations.stationObjects[randomStations].songs.length);

return stations.stationObjects[randomStations].songs[randomSongs];
}
}



const song = stations.song()
console.log("Now Playing: " + song.title + " by " + song.artist)






