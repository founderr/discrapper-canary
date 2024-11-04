n(411104);
var i = n(141795),
    l = n(476326),
    r = n(956664),
    o = n(693824);
e.Z = class t {
    toDataUrl(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return t.toDataURL(e, n);
    }
    async exportCanvas(t, e) {
        let { format: n, fileType: a = 'png', quality: s = 1, fileName: u } = e;
        if (n === o.kH.Base64) return this.toDataUrl(t, a, s);
        if (n === o.kH.Blob) {
            let e = this.toDataUrl(t, a, s);
            return (0, r.kD)(e);
        }
        if (n === o.kH.File) {
            let e = this.toDataUrl(t, a, s);
            return await (0, r.Bo)(e, u, 'image/png');
        }
        if (n === o.kH.CloudUpload) {
            let { channelId: n } = e,
                o = this.toDataUrl(t, a, s),
                c = await (0, r.Bo)(o, u, 'image/png');
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
