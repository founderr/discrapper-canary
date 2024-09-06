var t = s(544891),
    i = s(981631);
n.Z = {
    updateNote(e, n) {
        t.tn.put({
            url: i.ANM.NOTE(e),
            body: { note: n },
            oldFormErrors: !0
        });
    }
};
