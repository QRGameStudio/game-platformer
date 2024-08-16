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

    PLAYER.x = 70;
    PLAYER.y = 900;
    PLAYER.onscreenleft = () => {
      if (PLAYER.x < 0) {
          PLAYER.x = GAME.w - PLAYER.w;
      } else if (PLAYER.x > GAME.w) {
          PLAYER.x = PLAYER.w;
      }
      if (PLAYER.y > GAME.h) {
        PLAYER.y = 0;
        PLAYER.sy = 0;
      }
    };

    for (let i = 0; i < 10; i++) {
        GEOPlatform.create(GAME, 50 + (i * 150), 1000 - (i * 100));
    }

    GAME.onKeyDown = (key, event) => {
        switch (key) {
            case 'ArrowUp':
            case 'w':
                PLAYER.sy += 10;
                break;
            case 'ArrowLeft':
            case 'a':
                PLAYER.sx = -5;
                break;
            case 'ArrowRight':
            case 'd':
                PLAYER.sx = 5;
                break;
            default:
                return true;
        }

        event.preventDefault();
        return false;
    }

    GAME.onKeyUp = (key, event) => {
        switch (key) {
            case 'ArrowLeft':
            case 'a':
            case 'ArrowRight':
            case 'd':
                PLAYER.sx = 0;
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
