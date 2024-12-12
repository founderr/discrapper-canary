function n(e) {
    let n = e.regex,
        r = /(?![A-Za-z0-9])(?![$])/,
        i = n.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, r),
        a = n.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, r),
        s = {
            scope: 'variable',
            match: '\\$+' + i
        },
        o = {
            scope: 'meta',
            variants: [
                {
                    begin: /<\?php/,
                    relevance: 10
                },
                { begin: /<\?=/ },
                {
                    begin: /<\?/,
                    relevance: 0.1
                },
                { begin: /\?>/ }
            ]
        },
        l = {
            scope: 'subst',
            variants: [
                { begin: /\$\w+/ },
                {
                    begin: /\{\$/,
                    end: /\}/
                }
            ]
        },
        u = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
        c = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            contains: e.QUOTE_STRING_MODE.contains.concat(l)
        }),
        d = e.END_SAME_AS_BEGIN({
            begin: /<<<[ \t]*(\w+)\n/,
            end: /[ \t]*(\w+)\b/,
            contains: e.QUOTE_STRING_MODE.contains.concat(l)
        }),
        f = '[ \t\n]',
        _ = {
            scope: 'string',
            variants: [c, u, d]
        },
        h = {
            scope: 'number',
            variants: [{ begin: '\\b0[bB][01]+(?:_[01]+)*\\b' }, { begin: '\\b0[oO][0-7]+(?:_[0-7]+)*\\b' }, { begin: '\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b' }, { begin: '(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?' }],
            relevance: 0
        },
        p = ['false', 'null', 'true'],
        m = ['__CLASS__', '__DIR__', '__FILE__', '__FUNCTION__', '__COMPILER_HALT_OFFSET__', '__LINE__', '__METHOD__', '__NAMESPACE__', '__TRAIT__', 'die', 'echo', 'exit', 'include', 'include_once', 'print', 'require', 'require_once', 'array', 'abstract', 'and', 'as', 'binary', 'bool', 'boolean', 'break', 'callable', 'case', 'catch', 'class', 'clone', 'const', 'continue', 'declare', 'default', 'do', 'double', 'else', 'elseif', 'empty', 'enddeclare', 'endfor', 'endforeach', 'endif', 'endswitch', 'endwhile', 'enum', 'eval', 'extends', 'final', 'finally', 'float', 'for', 'foreach', 'from', 'global', 'goto', 'if', 'implements', 'instanceof', 'insteadof', 'int', 'integer', 'interface', 'isset', 'iterable', 'list', 'match|0', 'mixed', 'new', 'never', 'object', 'or', 'private', 'protected', 'public', 'readonly', 'real', 'return', 'string', 'switch', 'throw', 'trait', 'try', 'unset', 'use', 'var', 'void', 'while', 'xor', 'yield'],
        g = ['Error|0', 'AppendIterator', 'ArgumentCountError', 'ArithmeticError', 'ArrayIterator', 'ArrayObject', 'AssertionError', 'BadFunctionCallException', 'BadMethodCallException', 'CachingIterator', 'CallbackFilterIterator', 'CompileError', 'Countable', 'DirectoryIterator', 'DivisionByZeroError', 'DomainException', 'EmptyIterator', 'ErrorException', 'Exception', 'FilesystemIterator', 'FilterIterator', 'GlobIterator', 'InfiniteIterator', 'InvalidArgumentException', 'IteratorIterator', 'LengthException', 'LimitIterator', 'LogicException', 'MultipleIterator', 'NoRewindIterator', 'OutOfBoundsException', 'OutOfRangeException', 'OuterIterator', 'OverflowException', 'ParentIterator', 'ParseError', 'RangeException', 'RecursiveArrayIterator', 'RecursiveCachingIterator', 'RecursiveCallbackFilterIterator', 'RecursiveDirectoryIterator', 'RecursiveFilterIterator', 'RecursiveIterator', 'RecursiveIteratorIterator', 'RecursiveRegexIterator', 'RecursiveTreeIterator', 'RegexIterator', 'RuntimeException', 'SeekableIterator', 'SplDoublyLinkedList', 'SplFileInfo', 'SplFileObject', 'SplFixedArray', 'SplHeap', 'SplMaxHeap', 'SplMinHeap', 'SplObjectStorage', 'SplObserver', 'SplPriorityQueue', 'SplQueue', 'SplStack', 'SplSubject', 'SplTempFileObject', 'TypeError', 'UnderflowException', 'UnexpectedValueException', 'UnhandledMatchError', 'ArrayAccess', 'BackedEnum', 'Closure', 'Fiber', 'Generator', 'Iterator', 'IteratorAggregate', 'Serializable', 'Stringable', 'Throwable', 'Traversable', 'UnitEnum', 'WeakReference', 'WeakMap', 'Directory', '__PHP_Incomplete_Class', 'parent', 'php_user_filter', 'self', 'static', 'stdClass'],
        E = {
            keyword: m,
            literal: ((e) => {
                let n = [];
                return (
                    e.forEach((e) => {
                        n.push(e), e.toLowerCase() === e ? n.push(e.toUpperCase()) : n.push(e.toLowerCase());
                    }),
                    n
                );
            })(p),
            built_in: g
        },
        v = (e) => e.map((e) => e.replace(/\|\d+$/, '')),
        I = {
            variants: [
                {
                    match: [/new/, n.concat(f, '+'), n.concat('(?!', v(g).join('\\b|'), '\\b)'), a],
                    scope: {
                        1: 'keyword',
                        4: 'title.class'
                    }
                }
            ]
        },
        T = n.concat(i, '\\b(?!\\()'),
        b = {
            variants: [
                {
                    match: [n.concat(/::/, n.lookahead(/(?!class\b)/)), T],
                    scope: { 2: 'variable.constant' }
                },
                {
                    match: [/::/, /class/],
                    scope: { 2: 'variable.language' }
                },
                {
                    match: [a, n.concat(/::/, n.lookahead(/(?!class\b)/)), T],
                    scope: {
                        1: 'title.class',
                        3: 'variable.constant'
                    }
                },
                {
                    match: [a, n.concat('::', n.lookahead(/(?!class\b)/))],
                    scope: { 1: 'title.class' }
                },
                {
                    match: [a, /::/, /class/],
                    scope: {
                        1: 'title.class',
                        3: 'variable.language'
                    }
                }
            ]
        },
        y = {
            scope: 'attr',
            match: n.concat(i, n.lookahead(':'), n.lookahead(/(?!::)/))
        },
        S = {
            relevance: 0,
            begin: /\(/,
            end: /\)/,
            keywords: E,
            contains: [y, s, b, e.C_BLOCK_COMMENT_MODE, _, h, I]
        },
        A = {
            relevance: 0,
            match: [/\b/, n.concat('(?!fn\\b|function\\b|', v(m).join('\\b|'), '|', v(g).join('\\b|'), '\\b)'), i, n.concat(f, '*'), n.lookahead(/(?=\()/)],
            scope: { 3: 'title.function.invoke' },
            contains: [S]
        };
    S.contains.push(A);
    let N = [y, b, e.C_BLOCK_COMMENT_MODE, _, h, I];
    return {
        case_insensitive: !1,
        keywords: E,
        contains: [
            {
                begin: n.concat(/#\[\s*/, a),
                beginScope: 'meta',
                end: /]/,
                endScope: 'meta',
                keywords: {
                    literal: p,
                    keyword: ['new', 'array']
                },
                contains: [
                    {
                        begin: /\[/,
                        end: /]/,
                        keywords: {
                            literal: p,
                            keyword: ['new', 'array']
                        },
                        contains: ['self', ...N]
                    },
                    ...N,
                    {
                        scope: 'meta',
                        match: a
                    }
                ]
            },
            e.HASH_COMMENT_MODE,
            e.COMMENT('//', '$'),
            e.COMMENT('/\\*', '\\*/', {
                contains: [
                    {
                        scope: 'doctag',
                        match: '@[A-Za-z]+'
                    }
                ]
            }),
            {
                match: /__halt_compiler\(\);/,
                keywords: '__halt_compiler',
                starts: {
                    scope: 'comment',
                    end: e.MATCH_NOTHING_RE,
                    contains: [
                        {
                            match: /\?>/,
                            scope: 'meta',
                            endsParent: !0
                        }
                    ]
                }
            },
            o,
            {
                scope: 'variable.language',
                match: /\$this\b/
            },
            s,
            A,
            b,
            {
                match: [/const/, /\s/, i],
                scope: {
                    1: 'keyword',
                    3: 'variable.constant'
                }
            },
            I,
            {
                scope: 'function',
                relevance: 0,
                beginKeywords: 'fn function',
                end: /[;{]/,
                excludeEnd: !0,
                illegal: '[$%\\[]',
                contains: [
                    { beginKeywords: 'use' },
                    e.UNDERSCORE_TITLE_MODE,
                    {
                        begin: '=>',
                        endsParent: !0
                    },
                    {
                        scope: 'params',
                        begin: '\\(',
                        end: '\\)',
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: E,
                        contains: ['self', s, b, e.C_BLOCK_COMMENT_MODE, _, h]
                    }
                ]
            },
            {
                scope: 'class',
                variants: [
                    {
                        beginKeywords: 'enum',
                        illegal: /[($"]/
                    },
                    {
                        beginKeywords: 'class interface trait',
                        illegal: /[:($"]/
                    }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: !0,
                contains: [{ beginKeywords: 'extends implements' }, e.UNDERSCORE_TITLE_MODE]
            },
            {
                beginKeywords: 'namespace',
                relevance: 0,
                end: ';',
                illegal: /[.']/,
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: 'title.class' })]
            },
            {
                beginKeywords: 'use',
                relevance: 0,
                end: ';',
                contains: [
                    {
                        match: /\b(as|const|function)\b/,
                        scope: 'keyword'
                    },
                    e.UNDERSCORE_TITLE_MODE
                ]
            },
            _,
            h
        ]
    };
}
e.exports = n;
