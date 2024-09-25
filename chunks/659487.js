n.d(t, {
    w: function () {
        return u;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(356659);
let o = [
        (e) => {
            let t = {
                ...e,
                version: 1,
                applicationName: e.gameName,
                applicationId: void 0
            };
            return delete t.gameName, t;
        },
        (e) => ({
            ...e,
            version: 2,
            name: e.name.startsWith('Clip - ') ? void 0 : e.name
        }),
        (e) => ({
            ...e,
            version: 3,
            name: '' === e.name ? void 0 : e.name
        })
    ],
    s = null;
function l(e) {
    return null != s
        ? s
        : (s = e
              .object({
                  id: e.string().required(),
                  version: e.number().positive().integer().min(0).max(a.Bg).optional(),
                  name: e.string().when('version', {
                      is: e.number().less(3),
                      then: e.string().allow('')
                  }),
                  gameName: e.string().when('version', {
                      is: e.number().greater(0).required(),
                      then: e.forbidden(),
                      otherwise: e.required()
                  }),
                  applicationName: e.string().when('version', {
                      is: e.number().greater(0).required(),
                      then: e.required(),
                      otherwise: e.forbidden()
                  }),
                  applicationId: e.string(),
                  users: e.array().items(e.string()).required(),
                  filepath: e.string().required(),
                  length: e.number().required(),
                  thumbnail: e.string().required().allow(''),
                  editMetadata: e.object().keys({
                      start: e.number(),
                      end: e.number(),
                      applicationAudio: e.boolean(),
                      voiceAudio: e.boolean()
                  }),
                  clipMethod: e.string().allow('auto', 'manual').required()
              })
              .required());
}
async function u(e) {
    let t = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default,
        r = l(t);
    try {
        t.assert(e, r);
        let n = e;
        return null == n.version && (n.version = 0), o.slice(n.version).reduce((e, t) => t(e), n);
    } catch (e) {
        return null;
    }
}
