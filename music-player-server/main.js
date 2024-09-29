const http = require('http');
const fileSystem = require('fs/promises');
const path = require('path');

http.createServer(async function (request, response) {
    const file = await fileSystem.open('/home/noah/Music/C-Show - Make Some Noise for Mr.C/01 - C-Show - Make Some Noise for Mr.C.flac');
    const fileStream = file.createReadStream();
    const fileStat = await file.stat();
    const fileSize = fileStat.size;

    response.writeHead(200, {
        'Content-Type': 'audio/flac',
        'Content-Length': fileStat.size
    });

    fileStream.pipe(response);
})
.listen(5284);

