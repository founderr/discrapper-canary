let i;
function a() {
    return null != i
        ? i
        : (i = (async () => {
              let { default: e } = await r.e('20353').then(r.t.bind(r, 62994, 23)),
                  n = new e({
                      params: {
                          logProcessStats: !1,
                          useSharedArrayBuffer: !1,
                          debugLogs: !1,
                          bufferOverflowMS: 200,
                          models: {
                              model8: 'https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_8.kw',
                              model16: 'https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_16.kw',
                              model32: 'https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_32.kw'
                          }
                      }
                  });
              return await n.init(), n;
          })());
}
r.d(n, {
    n: function () {
        return a;
    }
});
