var r = t(470079);
n.Z = () => {
    let e = r.useRef(!0);
    return (
        r.useEffect(
            () => () => {
                e.current = !1;
            },
            []
        ),
        r.useCallback(() => e.current, [])
    );
};
