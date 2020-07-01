const menuHelper = require('../helpers/menuHelper');

test('findAccessRight returns false', () =>{
    const right = "8K";
    const userRights = ["HD", "fullHD", "4K"];
    const result = menuHelper.findAccessRight(right,userRights);
    expect(result).toBe(false);
});

test('findAccessRight returns true', () =>{
    const right = "fullHD";
    const userRights = ["HD", "fullHD", "4K"];
    const result = menuHelper.findAccessRight(right,userRights);
    expect(result).toBe(true);
});


test('checkMenuVodQuality returns true', () =>{
    const vod_genre =  [
        {
            "genre": "Anime",
            "vods": [
                {
                    "title": "Attack on Titan",
                    "quality": "HD"
                },
                {
                    "title": "Deadman Wonderland",
                    "quality": "4K"
                }
            ]
        },
        {
            "genre": "Action",
            "vods": [
                {
                    "title": "Rambo",
                    "quality": "HD"
                }
            ]
        },
        {
            "genre": "SCI-FI",
            "vods": [
                {
                    "title": "Sharknado",
                    "quality": "4K"
                },
                {
                    "title": "Lavalantula",
                    "quality": "fullHD"
                }
            ]
        }
    ];
    const userRights = ["HD", "fullHD", "4K"];
    const result = menuHelper.checkMenuVodQuality(userRights, vod_genre);
    expect(result.status).toBe(true);
});

test('checkMenuVodQuality returns false', () =>{
    const vod_genre =  [
        {
            "genre": "Anime",
            "vods": [
                {
                    "title": "Attack on Titan",
                    "quality": "HD"
                },
                {
                    "title": "Deadman Wonderland",
                    "quality": "8K"
                }
            ]
        },
        {
            "genre": "Action",
            "vods": [
                {
                    "title": "Rambo",
                    "quality": "SD"
                }
            ]
        },
        {
            "genre": "SCI-FI",
            "vods": [
                {
                    "title": "Sharknado",
                    "quality": "4K"
                },
                {
                    "title": "Lavalantula",
                    "quality": "fullHD1"
                }
            ]
        }
    ];
    const userRights = ["HD", "fullHD", "4K"];
    const result = menuHelper.checkMenuVodQuality(userRights, vod_genre);
    expect(result.status).toBe(false);
    expect(result.messages.length).toBe(3);
    expect(result.messages[0]).toBe('Genre Anime , VOD Deadman Wonderland has an unsupported Quality 8K');
    expect(result.messages[1]).toBe('Genre Action , VOD Rambo has an unsupported Quality SD');
    expect(result.messages[2]).toBe('Genre SCI-FI , VOD Lavalantula has an unsupported Quality fullHD1');
});
