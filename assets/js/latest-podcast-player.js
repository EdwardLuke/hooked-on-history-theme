/*
     This script will initialise the podcast players that are marked to play the latest episode.
 */

(function(window, document) {
    var PODCAST_LATEST_AUDIO_URL = LATEST_PODCAST_EPISODE_MP3_URL // Should be global and applied via the Ghost CMS <head> template
    var PODCAST_LATEST_AUDIO_SELECTOR = 'audio.podcast-player--latest'
    var PODCAST_LATEST_AUDIO_MIME_TYPE = 'audio/mpeg'

    var initaliseLatestEpisodePlayers = createPlayerInitialiser(PODCAST_LATEST_AUDIO_SELECTOR, PODCAST_LATEST_AUDIO_URL, PODCAST_LATEST_AUDIO_MIME_TYPE)

    initaliseLatestEpisodePlayers()

    function createSourceSelector(audioMimeType) {
        return 'source[type="AUDIO_MIME_TYPE"]'.replace('AUDIO_MIME_TYPE', audioMimeType)
    }

    function createPlayerInitialiser(audioSelector, audioUrl, audioMimeType) {
        return function initialisePlayers() {
            document
                .querySelectorAll(audioSelector)
                .forEach(setAudioSourceSrc(audioUrl, audioMimeType))
        }
    }

    function setAudioSourceSrc(audioUrl, audioMimeType) {
        return function (audioElement) {
            audioElement
                .setAttribute('src', audioUrl)
            audioElement
                .querySelector(createSourceSelector(audioMimeType))
                .setAttribute('src', audioUrl)
        }
    }
})(window, document);
