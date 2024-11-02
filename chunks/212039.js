n.d(t, {
    w: function () {
        return l;
    }
}),
    n(47120),
    n(653041);
var a = n(735630);
async function l(e) {
    let t = a.createFile(),
        n = a.createFile(),
        l = {};
    (e.fileStart = 0),
        (t.onReady = (e) => {
            for (let a of (n.init({
                duration: e.duration,
                timescale: e.timescale
            }),
            e.audioTracks))
                (l[a.id] = a),
                    t.setExtractionOptions(a.id, null, { nbSamples: 1 / 0 }),
                    n.addTrack({
                        id: a.id,
                        timescale: a.timescale,
                        hdlr: 'soun',
                        type: 'mp4a',
                        duration: a.duration,
                        layer: a.layer,
                        channel_count: a.audio.channel_count,
                        samplerate: a.audio.sample_rate,
                        samplesize: a.audio.sample_size,
                        name: a.name
                    });
            t.start();
        });
    let i = new Promise((e) => {
        t.onSamples = (a, i, r) => {
            for (let e of r) n.addSample(a, e.data, e);
            t.releaseUsedSamples(a, r.length), delete l[a];
            let o = n.getTrackById(a),
                s = t.getTrackById(a);
            if (null != s.edts) {
                let e = s.edts.elst;
                o.add('edts').boxes.push(e);
            }
            0 === Object.keys(l).length && e();
        };
    });
    return t.appendBuffer(e), t.flush(), await i, n.getBuffer();
}
