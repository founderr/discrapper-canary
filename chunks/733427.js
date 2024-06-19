var s = n(470079);
t.Z = () => {
  let e = s.useRef(!0);
  return s.useEffect(() => () => {
    e.current = !1
  }, []), s.useCallback(() => e.current, [])
}