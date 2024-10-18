var i = t(544891),
    s = t(981631);
n.Z = {
    updateNote(e, n) {
        i.tn.put({
            url: s.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0
        });
    }
};
