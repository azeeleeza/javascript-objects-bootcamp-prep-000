var playlist = new Object({'Donna Summer':'Grand Illusion'})

function updatePlaylist(obj,artistName,songTitle){
  //obj[artistName] = songTitle
  return Object.assign({}, obj, artistName:songTitle)

}

function removeFromPlaylist(obj,artistName){
  delete obj.artistName
  return obj
}
