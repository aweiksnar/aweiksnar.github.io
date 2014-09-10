(ns alex.core
  (:refer-clojure :exclude [map])
  (:require
     [dommy.utils :as utils]
     [dommy.core :as d]
     [cljs.core.async :refer [!> <! chan put! close! timeout map]])
  (:require-macros
     [cljs.core.async.macros :refer [go alt!]])
  (:use-macros
     [dommy.macros :only (node sel sel1)]))

(enable-console-print!)

(def wooly-img (sel1 :#wooly))
(def wooly-speech (sel1 :#wooly-speech))
(def site-main-title (sel1 :#site-main-title))
(def site-bottom-menu (sel1 :#site-bottom-menu))

(defn pos [side elem]
  "abs px position of an elements side"
  (side (d/bounding-client-rect elem)))

(defn half-height [elem]
  "half the height of an element"
  (/ (.-height elem) 2))

(defn str-px [s]
  "builds a string with 'px' added to the end of it"
  (str s "px"))

(defn add-text-to-right-side! [args-map]
  "adds vertically-centered text to the right side of an element
   expects a map with target-elem, text-elem, and text keys"
  (let [{:keys [target-elem text-elem text]} args-map]
      (d/set-text! text-elem text)
      (d/set-style! text-elem
                    :top (str-px (+ (pos :top target-elem)
                                    (half-height target-elem)))
                    :left (str-px (pos :right target-elem)))))

(defn events [elem type]
  (let [out (chan)]
    (d/listen! elem type
               (fn [e] (put! out e)))
       out))

;; event code - element specific

(defn init-wooly-transition []
  (let [clicks (events wooly-img "click")]
   (go (loop [transition true
              display false]
         (<! clicks)
         (d/toggle-class! wooly-img "moved-top-left" transition)
         (d/toggle! site-main-title display)
         (d/toggle! site-bottom-menu display)

         (<! (timeout 1000))

         (if transition
           (add-text-to-right-side! {:target-elem wooly-img :text-elem wooly-speech :text "hey don't click on me"})
           (d/set-text! wooly-speech ""))

         (recur (not transition) (not display))))))

(init-wooly-transition)
