n(411104);
var i = n(141795),
    l = n(476326),
    o = n(956664),
    r = n(693824);
e.Z = class t {
    toDataUrl(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return t.toDataURL(e, n);
    }
    async exportCanvas(t, e) {
        let { format: n, fileType: a = 'png', quality: s = 1, fileName: u } = e;
        if (n === r.kH.Base64) return this.toDataUrl(t, a, s);
        if (n === r.kH.Blob) {
            let e = this.toDataUrl(t, a, s);
            return (0, o.kD)(e);
        }
        if (n === r.kH.File) {
            let e = this.toDataUrl(t, a, s);
            return await (0, o.Bo)(e, u, 'image/png');
        }
        if (n === r.kH.CloudUpload) {
            let { channelId: n } = e,
                r = this.toDataUrl(t, a, s),
                c = await (0, o.Bo)(r, u, 'image/png');
            return new i.n(
                {
                    file: c,
                    platform: l.ow.WEB,
                    isThumbnail: !1
                },
                n
            );
        }
        throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
    }
};
