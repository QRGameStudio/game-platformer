class GEOPlatform extends GEO {
    constructor(game) {
        super(game);
        this.type = "platform";
        this.width = 100;
        this.height = 20;
        this.color = "white";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.cx - this.wh, this.cy - this.hh, this.width, this.height);
    }

    /**
     * Create platform on specific position
     * @param game {GEG}
     * @param x {number | undefined}
     * @param y {number | undefined}
     * @param width {number | undefined}
     * @param height {number | undefined}
     * @param color {string | undefined}
     * @returns {GEOPlatform}
     */
    static create(game, x = undefined, y = undefined, width = undefined, height = undefined, color = undefined) {
        const platform = new GEOPlatform(game);

        if (x !== undefined) {
            platform.x = x;
        }
        if (y !== undefined) {
            platform.y = y;
        }
        if (width !== undefined) {
            platform.width = width;
        }
        if (height !== undefined) {
            platform.height = height;
        }
        if (color !== undefined) {
            platform.color = color;
        }

        return platform;
    }
}
