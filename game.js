const { random, sin, cos, PI } = Math;
const $ = document.querySelector.bind(document);

/** @type {GEOPlayer} */
let PLAYER;

// !G.import('src/index.js')

/** @type {GSongLib} */
const MUSIC = new GSongLib();
/** @type {GScore} */
const SCORE = new GScore();
/** @type {GModal} */
const MODAL = new GModal();
/** @type {GStorage} */
const STORAGE = new GStorage("platformer");
/** @type {GEG} */
let GAME;

async function start() {
    // noinspection JSValidateTypes
    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = $('#game-canvas');
    GAME = new GEG(canvas);

    GAME.res = GUt.isLandscape() ? {w: 1920, h: 1080} : {w: 1080, h: 1920};

    PLAYER = new GEOPlayer(GAME);
    // GAME.cameraFollowObject = PLAYER;
    GAME.hearingDistance = GAME.r * 4;
    GAME.fullSimulationRange = GAME.r * 5;
    GAME.fps = 30;

    GEOPlatform.create(GAME, 50, 1000);

    GAME.onKeyDown = (key, event) => {
        switch (key) {
            case 'ArrowUp':
            case 'w':
                PLAYER.sy += 1;
                break;
            case 'ArrowLeft':
            case 'a':
                PLAYER.sx -= 1;
                break;
            case 'ArrowDown':
            case 's':
                PLAYER.sy -= 1;
                break;
            case 'ArrowRight':
            case 'd':
                PLAYER.sx += 1;
                break;
            default:
                return true;
        }

        event.preventDefault();
        return false;
    }

    GAME.run();
}

(async () => await start())();
