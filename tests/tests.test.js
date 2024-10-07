const fs = require('fs');
const path = require('path');

test('all files within this directory should follow the studentid_gb.txt format', () => {
    const files = fs.readdirSync('./content');

    if(files.length === 0) {
        console.warn('The content directory is empty.');
        return
    }


    files.forEach(file => {
        const regex = /^\d+_(gb|devops|sdlc)\.txt$/;
        expect(regex.test(file)).toBe(true);
        
    });
})