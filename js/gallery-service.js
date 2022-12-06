'use strict'

var gProjs

function getProjById(projId){
    return gProjs.find(proj => proj.id === projId)
}

function getProjs() {
    _createProjs()
    console.log('gProjs:', gProjs)
    return gProjs
}

function _createProjs() {
    gProjs = [
        _createProj('minesweeper', 'Mine Sweeper', 'Classic Game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'https://linoyalkalay.github.io/Mine-Sweeper/', 1669212000, ['Matrixes', 'Game']),
        _createProj('guesswho', 'Guess Who', 'a game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'url', 1669212000, ['bootstrap', 'Game']),
        _createProj('touchnum', 'Touch Num', 'a game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'url', 1669212000, ['Matrixes', 'Game']),
        _createProj('pacman', 'Pacman', 'a game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'url', 1669212000, ['Matrixes', 'Game']),
        _createProj('inpicture', 'In Picture', 'a game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'url', 1669212000, ['Game']),
        _createProj('ballboard', 'Ball Board', 'a game', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ipsam deserunt ea exercitationem dignissimos, sequi tenetur facilis velit eius voluptatem eligendi dolores quia! Quae necessitatibus asperiores cumque, laboriosam animi pariatur.', 'url', 1669212000, ['Matrixes', 'Game']),
    ]
}

function _createProj(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc, 
        url,
        publishedAt,
        labels
    }
}
