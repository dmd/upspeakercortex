// 1000 most common words
var valid_words = ["a", "able", "about", "above", "absolutely", "access", "account", "across", "act", "action", "actual", "actually", "add", "address", "advice", "after", "again", "against", "age", "ago", "agree", "air", "all", "allow", "allowed", "almost", "alone", "along", "already", "also", "although", "always", "am", "amazing", "america", "american", "americans", "among", "amount", "an", "analog", "and", "another", "answer", "answers", "any", "anyone", "anything", "anyway", "apparently", "are", "area", "arent", "argument", "around", "art", "article", "as", "ask", "asked", "asking", "ass", "assume", "at", "attention", "available", "avoid", "away", "awesome", "baby", "back", "bad", "bar", "based", "basic", "basically", "be", "because", "bee", "been", "before", "behavior", "behind", "being", "believe", "best", "bet", "better", "between", "beyond", "big", "bill", "bit", "black", "blog", "blue", "body", "book", "books", "both", "bought", "box", "brain", "break", "bring", "building", "bunch", "bush", "business", "but", "buy", "buying", "by", "c", "call", "called", "calling", "came", "can", "cannot", "cant", "car", "card", "care", "case", "cases", "cat", "cause", "certain", "certainly", "chance", "change", "changed", "cheap", "check", "child", "children", "choice", "choose", "city", "claim", "class", "clear", "clearly", "close", "code", "cold", "college", "com", "come", "comes", "coming", "comment", "comments", "common", "community", "companies", "company", "completely", "computer", "consider", "considered", "contact", "content", "continue", "control", "conversation", "cool", "copy", "correct", "cost", "could", "couldnt", "country", "couple", "course", "cover", "crap", "crazy", "create", "credit", "culture", "current", "cut", "damn", "data", "date", "day", "days", "dead", "deal", "death", "decide", "definitely", "design", "did", "didnt", "die", "difference", "different", "difficult", "directly", "discussion", "do", "doctor", "does", "doesnt", "dog", "doing", "done", "dont", "door", "doubt", "down", "drink", "drive", "due", "during", "e", "each", "early", "easier", "easily", "easy", "eat", "eating", "effect", "eight", "either", "eleven", "else", "email", "end", "energy", "english", "enjoy", "enough", "entire", "entirely", "especially", "etc", "even", "eventually", "ever", "every", "everyone", "everything", "evidence", "exactly", "example", "excellent", "except", "expect", "expensive", "experience", "explain", "extra", "eyes", "face", "fact", "fair", "fairly", "fall", "family", "far", "fast", "favorite", "feel", "feeling", "felt", "few", "field", "fifteen", "fifty", "figure", "file", "film", "finally", "find", "finding", "fine", "first", "fit", "five", "folks", "follow", "food", "for", "force", "forget", "form", "found", "four", "free", "friend", "friends", "from", "front", "fuck", "fucking", "full", "fun", "funny", "further", "future", "game", "games", "gave", "gay", "general", "generally", "get", "gets", "getting", "girl", "give", "given", "gives", "giving", "go", "god", "goes", "going", "gone", "good", "google", "got", "government", "great", "group", "guess", "guy", "guys", "had", "hair", "half", "hand", "hands", "happen", "happened", "happens", "happy", "hard", "has", "hate", "have", "havent", "having", "he", "head", "health", "hear", "heard", "heart", "hell", "help", "her", "here", "heres", "hes", "hey", "high", "higher", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hot", "hour", "hours", "house", "how", "however", "http", "huge", "human", "i", "id", "idea", "ideas", "if", "ill", "im", "image", "imagine", "important", "in", "including", "indeed", "information", "inside", "instead", "insurance", "interest", "interested", "interesting", "internet", "into", "involved", "iraq", "is", "isnt", "issue", "issues", "it", "its", "itself", "ive", "job", "jobs", "john", "just", "keep", "key", "kid", "kids", "kill", "kind", "knew", "know", "known", "knows", "lack", "language", "large", "last", "late", "later", "law", "learn", "learned", "least", "leave", "left", "legal", "less", "let", "lets", "level", "life", "light", "like", "liked", "likely", "line", "link", "links", "list", "listen", "little", "live", "lived", "lives", "living", "local", "long", "longer", "look", "looked", "looking", "looks", "lose", "lost", "lot", "lots", "love", "low", "luck", "machine", "made", "main", "major", "make", "makes", "making", "man", "many", "market", "matter", "may", "maybe", "me", "mean", "means", "meant", "media", "meet", "mefi", "members", "men", "mention", "mentioned", "metafilter", "middle", "might", "military", "mind", "mine", "minutes", "mom", "moment", "money", "month", "months", "more", "morning", "most", "mostly", "mother", "move", "movie", "movies", "moving", "mr", "much", "music", "must", "my", "myself", "name", "national", "near", "nearly", "necessary", "need", "needed", "needs", "never", "new", "news", "next", "nice", "night", "nine", "no", "nobody", "none", "normal", "not", "note", "nothing", "notice", "now", "number", "numbers", "obama", "obvious", "obviously", "of", "off", "offer", "office", "often", "oh", "oil", "ok", "okay", "old", "older", "on", "once", "one", "onehundred", "ones", "online", "only", "open", "opinion", "option", "or", "orders", "original", "other", "others", "otherwise", "our", "out", "outside", "over", "own", "page", "paid", "pain", "paper", "parents", "part", "particular", "particularly", "parts", "party", "past", "pay", "paying", "people", "per", "perfect", "perhaps", "person", "personal", "personally", "phone", "pick", "picture", "pictures", "piece", "place", "places", "plan", "play", "playing", "please", "plenty", "plus", "point", "points", "police", "policy", "political", "poor", "popular", "position", "possible", "possibly", "post", "posted", "posting", "posts", "power", "president", "pretty", "price", "private", "probably", "problem", "problems", "process", "program", "project", "provide", "public", "put", "putting", "quality", "question", "questions", "quickly", "quite", "rate", "rather", "read", "reading", "real", "realize", "really", "reason", "reasons", "recent", "recently", "recommend", "record", "red", "regular", "related", "relationship", "religion", "religious", "remember", "research", "respect", "response", "rest", "result", "results", "right", "rights", "risk", "rock", "room", "rules", "run", "running", "s", "safe", "said", "same", "save", "saw", "say", "saying", "says", "school", "science", "search", "second", "security", "see", "seeing", "seem", "seemed", "seems", "seen", "sell", "send", "sense", "series", "serious", "seriously", "service", "set", "seven", "several", "sex", "share", "she", "shes", "shit", "short", "shot", "should", "shouldnt", "show", "shows", "side", "sign", "similar", "simple", "simply", "since", "single", "site", "sites", "situation", "six", "size", "sleep", "small", "so", "social", "society", "software", "solution", "some", "somehow", "someone", "something", "sometimes", "somewhere", "song", "soon", "sorry", "sort", "sound", "sounds", "source", "south", "space", "speak", "speaking", "special", "specific", "spend", "spent", "stand", "standard", "start", "started", "state", "states", "stay", "step", "still", "stop", "store", "stories", "story", "straight", "street", "strong", "students", "stuff", "stupid", "style", "subject", "such", "suggest", "support", "supposed", "sure", "surprised", "system", "take", "taken", "takes", "taking", "talk", "talking", "tax", "tell", "telling", "ten", "tend", "term", "terms", "test", "text", "than", "thank", "thanks", "that", "thats", "the", "their", "them", "themselves", "then", "theory", "there", "theres", "these", "they", "theyll", "theyre", "theyve", "thing", "things", "think", "thinking", "third", "thirty", "this-is-cortex", "this", "those", "though", "thought", "thread", "three", "through", "time", "times", "to", "today", "together", "told", "too", "took", "top", "totally", "towards", "town", "tried", "trouble", "true", "truly", "trust", "try", "trying", "turn", "turned", "tv", "twenty", "two", "type", "u", "under", "understand", "unless", "until", "up", "upon", "us", "use", "used", "useful", "user", "using", "usually", "value", "various", "version", "very", "via", "video", "view", "vote", "wait", "walk", "want", "wanted", "wants", "war", "was", "wasnt", "watch", "watching", "water", "way", "ways", "we", "wear", "web", "website", "week", "weeks", "weight", "weird", "well", "went", "were", "weve", "what", "whatever", "whats", "when", "where", "whether", "which", "while", "white", "who", "whole", "why", "wife", "will", "willing", "windows", "wish", "with", "within", "without", "woman", "women", "wonder", "wont", "word", "words", "work", "worked", "working", "works", "world", "worry", "worse", "worth", "would", "wouldnt", "wow", "write", "writing", "written", "wrong", "wrote", "x", "yeah", "year", "years", "yes", "yet", "you", "youd", "youll", "young", "your", "youre", "yourself", "youve", "zero", "zerozerozero"];
var wordmap = {};

for (var i in valid_words) {
    var w = normalize(valid_words[i]);
    wordmap[w] = true;
}
words_to_play = [];

function normalize(word) {
    if (typeof word !== 'string') return '';
    return word.toLowerCase().replace(/[^a-z]/g, '');
}

// trim for IE8 compatibility
function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

// indexOf(x) >= 0 for IE8 compatibility
function contains(array, el) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == el) return true;
    }
    return false;
}

/**
 * Creates a hash map of the first letters of words. Every entry of the returned array
 * corresponds to one letter and contains all the words that start with it.
 * @param dict word list
 * @return {Array}
 */
function build_index(dict) {
    // make sure it's sorted properly
    dict.sort();

    // Build a index based on the first letter of the words
    var tree = [];
    var current_letter = '';

    for (var i = 0; i < dict.length; i++) {
        var first_letter = dict[i].charAt(0);
        if (first_letter != current_letter) {
            tree[first_letter] = [];
            current_letter = first_letter;
        }
        tree[first_letter].push(dict[i]);
    }
    return tree;
}

/**
 * Checks if the index contains the word.
 * @param word some word
 * @return {Boolean}
 */
function index_contains(word)
{
    var index = valid_words[word.charAt(0)];
    if (typeof (index) == "undefined") return false;
    return contains(index, word);
}

/**
 * Checks if a word is in the index and therefore valid.
 * @param word some word
 * @return {Boolean}
 */
function is_valid(word) {
    // if the word is hyphenated, check the parts individually
    if (word.match(/-/)) {
        var parts = word.split("-");
        var valid = true;
        for (var i = 0; i < parts.length; i++) {
            valid = valid && is_valid(parts[i]);
        }
        return valid;
    }
    word = normalize(word);
    if (word === "") return false;
    return index_contains(word) || index_contains(word.toLowerCase());
}

/**
 * Gets the text that was entered by the user so far.
 * @return {String}
 */
function get_text() {
    return document.getElementById("Text").value;
}

/**
 * Returns an array of the words that were typed in by the user splitted by spaces
 * and annotated with <valid/> and <invalid/> tags.
 * @return {Array}
 */
function get_input_words() {
    var textfield = document.getElementById("Text");
    var text = get_text().replace(/\n/g, " <br> ");
    var words = text.split(/\s/);
    for (var i = words.length - 1; i >= 0; i--) {
        if (trim(words[i]) === "" || words[i] === "<br>") continue;
        var valid = is_valid(trim(words[i]));
        words[i] = words[i].replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (!valid) words[i] = "<invalid>" + words[i] + "</invalid>";
        else words[i] = "<valid>" + words[i] + "</valid>";
    }
    return words;
}

function get_input_words_bare() {
    var textfield = document.getElementById("Text");
    var text = get_text().replace(/\n/g, " <br> ");
    var words = text.split(/\s/);
    return words;
}

/**
 * Checks all the words in the text area and highlights valid and invalid words.
 * Additionally suggestions for the last word are shown.
 */
function check_words() {
    var input_words = get_input_words();
    var words = [];
    for (var i = 0, j = 0; i < input_words.length; i++) {
        if (input_words[i] !== "") {
            words.push(input_words[i]);
        }
        if (input_words[i] != "<br>") {
            words.push(" ");
        }
    }

    // alternate spaces
    for (i = 0; i < words.length - 1; i++) {
        if (words[i] == " " && words[i + 1] == " ") {
            words[i] = "&nbsp;";
        }
    }

    // update the background layer
    document.getElementById("BgLayer").innerHTML = words.join("");

    // Last word
    document.getElementById("Suggestions").innerHTML = "";
    var last_word = normalize(find_last_word(words));
    if (last_word !== null) {
        show_suggestions(last_word);
        if (last_word.match(/^[A-Z]/)) show_suggestions(last_word);
    }
}

/**
 * Syncs the scroll position of the text editor and the background layer
 */
function sync_layers() {
    document.getElementById("BgLayer").scrollTop = document.getElementById("Text").scrollTop;
}

/**
 * Shows other words that are similar (e.g. share a common prefix) with a word
 * next to the text editor.
 * @param word
 */
function show_suggestions(word) {
    if (word === null) return;
    var first_letter = word.charAt(0);
    var suggestions = document.getElementById("Suggestions");
    var index = valid_words[first_letter];
    if (typeof (index) == "undefined") return;
    for (var i = 0, j = 0; i < index.length; i++) {
        var regex = new RegExp(word);
        if (!index[i].match(regex)) continue;
        var mark = index[i].replace(word, "<b>" + word + "</b>");
        suggestions.innerHTML += "<li>" + mark + "</li>";
        if (j++ > 50) {
            suggestions.innerHTML += "<li>...</li>";
            break;
        }
    }
}

/**
 * Strips all HTML tags from the given word.
 * @param word Some word
 * @return {String}
 */
function strip_html(word) {
    var el = document.createElement("div");
    el.innerHTML = word;
    if (el.innerText) return el.innerText;
    else return el.textContent;
}

/**
 * Returns the last word in a list of words as returned by get_input_words().
 * @param words words from get_input_words()
 * @return {*}
 */
function find_last_word(words) {
    for (var i = words.length - 1; i >= 0; i--) {
        var part = strip_html(trim(words[i]));
        if (part === "") continue;
        return part;
    }
    return words[0];
}

function load() {
    // removed from original: load other word list
    valid_words = build_index(valid_words);
}

function refresh_index() {
    if (typeof (valid_words[0]) != "object")
        valid_words = build_index(valid_words);
}

function playwords(words) {
    if (words.length === 0) {
        console.log('play ended');
        return;
    }
    var word = words[0];
    words.shift();
    playword_then_words(word, words);
}

function play_next_word() {
    if (words_to_play.length === 0) {
        console.log('play ended');
        return;
    }
    var word = words_to_play[0];
    words_to_play.shift();
    $("#jquery_jplayer_1").jPlayer("setMedia", {
        mp3: url_of(word)
    });
    $("#jquery_jplayer_1").jPlayer("play");
}

function preload(urls) {
    $(urls).each(function () {
        $('<img/>')[0].src = this;
    });
}

function url_of(word) {
    prefix = "";
    if (document.location.host == "3e.org") {
        prefix = "/upspeakercortex/";
    }
    return prefix + "words/" + word + ".mp3";
}

function try_speak_words() {
    var allwords = get_input_words_bare();
    var words = [];
    for (var i in allwords) {
        var w = normalize(allwords[i]);
        if (w in wordmap) {
            words.push(w);
        } else {
            console.log("invalid word: " + w);
        }
    }
    if (words.length === 0) return;
    words_to_play = words;
    var urls = [];
    for (i in words) {
        urls.push(url_of(words[i]));
    }
    console.log('preloading initiated!');
    preload(urls);
    play_next_word();
}

function getParameterByName(name) {
    name = name.replace('[', '\\[').replace(']', '\\]');
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results === null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}

function upspeakerPrepare() {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $("#speak").prop('disabled', false);
        },
        swfPath: "Jplayer.swf",
        supplied: "mp3",
        ended: play_next_word
    });
    var p = getParameterByName('words');
    if (p !== "") {
        $("#Text").val(p);
        $("#speak").click();
    }
    $('#share').click(function () {
        $('#shareInput').remove();
        var rawText = $('#Text').val();
        var polishedText = rawText.replace(/ /g, '%20');
        polishedText = polishedText.replace(/(\r\n|\n|\r)/gm, "%0A");
        $(this).after('<input type="text" value="http://3e.org/upspeakercortex/?words=' + polishedText + '" style="width:486px;" id="shareInput"></input>');
    });
}
