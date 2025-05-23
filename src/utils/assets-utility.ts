import { Assets } from "@drincs/pixi-vn";

/**
 * Define all the assets that will be used in the game.
 * This function will be called before the game starts.
 * You can read more about assets management in the documentation: https://pixi-vn.web.app/start/assets-management.html
 */
export async function defineAssets() {
    // backgrounds
    Assets.add({
        alias: "background_main_menu",
        src: "/shrimp-story/Main_Screen.png",
    });
    Assets.add({
        alias: "bg01-basement",
        src: "/shrimp-story/Basement.png",
    });
    Assets.add({
        alias: "bg02-bedroom",
        src: "/shrimp-story/Bedroom.png",
    });
    Assets.add({
        alias: "bg03-campus",
        src: "/shrimp-story/Campus.png",
    });
    Assets.add({
        alias: "bg04-busstop",
        src: "/shrimp-story/Busstop.png",
    });
    Assets.add({
        alias: "bg05-karaoke",
        src: "/shrimp-story/Karaoke.png",
    });
    // Brian Basement
    Assets.add({
        alias: "brian1",
        src: "/shrimp-story/brian1.png",
    });
    Assets.add({
        alias: "brian2",
        src: "/shrimp-story/brian2.png",
    });
    // Brian Cool
    Assets.add({
        alias: "brianCool1",
        src: "/shrimp-story/coolBrian1.png",
    });
    Assets.add({
        alias: "brianCool2",
        src: "/shrimp-story/coolBrian2.png",
    });
    Assets.add({
        alias: "brianCool3",
        src: "/shrimp-story/coolBrian3.png",
    });
    // Brian Baseball
    Assets.add({
        alias: "brianBase1",
        src: "/shrimp-story/baseballBrian1.png",
    });
    Assets.add({
        alias: "brianBase2",
        src: "/shrimp-story/baseballBrian2.png",
    });
    Assets.add({
        alias: "brianBase3",
        src: "/shrimp-story/baseballBrian3.png",
    });
    // Girl Brian
    Assets.add({
        alias: "brianGirl1",
        src: "/shrimp-story/girlBrian1.png",
    });
    Assets.add({
        alias: "brianGirl2",
        src: "/shrimp-story/girlBrian2.png",
    });
    // Rain Brian
    Assets.add({
        alias: "brianRain1",
        src: "/shrimp-story/rainBrian1.png",
    });
    Assets.add({
        alias: "brianRain2",
        src: "/shrimp-story/rainBrian2.png",
    });
    Assets.add({
        alias: "brianRain3",
        src: "/shrimp-story/rainBrian3.png",
    });
    // Teacher Brian
    Assets.add({
        alias: "brianTeacher1",
        src: "/shrimp-story/teacherBrian1.png",
    });
    Assets.add({
        alias: "brianTeacher2",
        src: "/shrimp-story/teacherBrian2.png",
    });

    Assets.add({
        alias: "fm01-eyes-grin",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-eyes-grin.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-eyes-smile",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-eyes-smile.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-eyes-soft",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-eyes-soft.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-eyes-upset",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-eyes-upset.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-eyes-wow",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-eyes-wow.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-grin00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-grin00.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-serious00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-serious00.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-serious01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-serious01.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-smile00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-smile00.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-smile01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-smile01.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-soft00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-soft00.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-soft01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-soft01.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-upset00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-upset00.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-upset01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-upset01.webp?alt=media",
    });
    Assets.add({
        alias: "fm01-mouth-wow01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm01%2Ffm01-mouth-wow01.webp?alt=media",
    });
    // female character 02
    Assets.add({
        alias: "fm02-body",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-body.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-bawl",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-bawl.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-joy",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-joy.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-nervous",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-nervous.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-smile",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-smile.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-upset",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-upset.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-eyes-wow",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-eyes-wow.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-cry01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-cry01.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-nervous00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-nervous00.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-nervous01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-nervous01.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-smile00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-smile00.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-smile01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-smile01.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-upset00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-upset00.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-upset01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-upset01.webp?alt=media",
    });
    Assets.add({
        alias: "fm02-mouth-wow01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Ffm02%2Ffm02-mouth-wow01.webp?alt=media",
    });
    // male character 01
    Assets.add({
        alias: "m01-body",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-body.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-annoy",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-annoy.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-concern",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-concern.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-cry",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-cry.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-grin",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-grin.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-smile",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-smile.webp?alt=media",
    });
    Assets.add({
        alias: "m01-eyes-wow",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-eyes-wow.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-annoy00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-annoy00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-annoy01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-annoy01.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-concern00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-concern00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-concern01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-concern01.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-cry00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-cry00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-cry01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-cry01.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-grin00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-grin00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-neutral00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-neutral00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-neutral01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-neutral01.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-smile00",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-smile00.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-smile01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-smile01.webp?alt=media",
    });
    Assets.add({
        alias: "m01-mouth-wow01",
        src: "https://firebasestorage.googleapis.com/v0/b/pixi-vn.appspot.com/o/public%2Fbreakdown%2Fm01%2Fm01-mouth-wow01.webp?alt=media",
    });

    // The game will not start until these asserts are loaded.
    await Assets.load("background_main_menu");

    // The game will start immediately, but these asserts will be loaded in the background.
    // Assets.load('flowerTop')
}
