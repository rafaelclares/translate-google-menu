/* informe o baseUri  caso  precise passar o caminho completo do diretório das imagens
 * ex:  http://seusite.com.br/assets      (sem a última barra)
 * neste caso o caminho completo do diretório das imagens ficaria
 *  http://seusite.com.br/assets/flags/
 */

const baseUri = "";

function setFlags() {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement && selectElement.value !== undefined) {
        var selectedValue = selectElement.value;
    } else {
        var selectedValue = "pt";
    }
    const iconFlagElement = document.getElementById("icon-flag_");
    const languageElement = document.getElementById("language_");

    const flagImages = {
        de: "german.png",
        es: "spanish.png",
        fr: "french.png",
        en: "english.png",
        it: "italian.png",
        pt: "portuguese.png",
    };

    const flagText = {
        de: "Alemão",
        es: "Espanhol",
        fr: "Francês",
        en: "Inglês",
        it: "Italiano",
        pt: "Português",
    };

    const defaultFlag = "portuguese.png";
    const defaultLanguage = "Português";

    const flagImage = flagImages[selectedValue] || defaultFlag;
    const flagAltText =
        selectedValue.charAt(0).toLowerCase() + selectedValue.slice(1);
    const languageText = flagText[flagAltText]
        ? flagText[flagAltText]
        : defaultLanguage;
    iconFlagElement.innerHTML = `<img src="${baseUri}flags/${flagImage}" height="20" width="20" alt="${flagAltText}" />`;
    languageElement.textContent = languageText;
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "pt",
            autoDisplay: false,
            includedLanguages: "en,es,de,fr,it,pt",
        },
        "google_translate_element2"
    );
    setFlags();
}

/* <![CDATA[ */
eval(
    (function (p, a, c, k, e, r) {
        e = function (c) {
            return (
                (c < a ? "" : e(parseInt(c / a))) +
                ((c = c % a) > 35
                    ? String.fromCharCode(c + 29)
                    : c.toString(36))
            );
        };
        if (!"".replace(/^/, String)) {
            while (c--) r[e(c)] = k[c] || e(c);
            k = [
                function (e) {
                    return r[e];
                },
            ];
            e = function () {
                return "\\w+";
            };
            c = 1;
        }
        while (c--)
            if (k[c])
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        return p;
    })(
        "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
        43,
        43,
        "||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500".split(
            "|"
        ),
        0,
        {}
    )
);
/* ]]> */

setTimeout(function () {
    var selectElement = document.querySelector(".goog-te-combo");
    selectElement.addEventListener("change", setFlags);
}, 1000);
