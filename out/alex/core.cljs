(ns alex.core
  (:require 
     [dommy.utils :as utils]
     [dommy.core :as d])
  (:use-macros
     [dommy.macros :only (node sel sel1)]))

(enable-console-print!)

;; TODO: make a wooly namespace
;; a helpers namespace
;; a universal transition time location
;; make toggle safer with explicit switch

(def wooly-img (sel1 :#wooly))
(def wooly-speech (sel1 :#wooly-speech))
(def site-main-title (sel1 :#site-main-title))
(def site-bottom-menu (sel1 :#site-bottom-menu))

(defn log [stuff]
  "log stuff"
  (.log js/console stuff))

(defn pos [side el]
  "px position of an elements side"
  (side 
    (d/bounding-client-rect el)))

(defn half-height [elem]
  "half the height of an element"
  (/ (.-height elem) 2))

(defn move-to [x y elem]
  "moves an absolutely positioned element to x y"
  (let [el-x (pos :left elem)
        el-y (pos :top elem)]
    (log el-y)))

(defn toggle-elems [& elems]
  "toggles visibility of a list of elements"
  (doseq [elem elems]
    (d/toggle! elem)))

(defn str-px [s]
  "builds a string with 'px' added to the end of it"
  (str s "px"))

(defn elem-is-empty [elem]
  (empty? (d/html elem)))

(defn add-text-to-right-side! [args-map]
  "adds vertically-centered text to the right side of an element
   expects a map with target-elem, text-elem, and text keys"
  (let [{:keys [target-elem text-elem text delay-time]} args-map]
      (d/set-text! text-elem text)
      (d/set-style! text-elem
                    :top (str-px (+ (pos :top target-elem) 
                                    (half-height target-elem)))
                    :left (str-px (pos :right target-elem)))))

(defn show-wooly-message! [message delay-time]
  "displays message on right side of wooly image after specified delay (ms)"
  (js/setTimeout
    #(add-text-to-right-side!
       {:target-elem wooly-img
        :text-elem wooly-speech 
        :text message})
    delay-time))


(defn toggle-wooly-transition! []
  "toggles transition effect of wooly image"
  (d/toggle-class! wooly-img "moved-top-left")

  (toggle-elems site-main-title site-bottom-menu)
  
  (if (elem-is-empty wooly-speech)
    (show-wooly-message! "hey don't click on me" 1000)
  (d/set-text! wooly-speech "")))

(d/listen! wooly-img
           :click toggle-wooly-transition!)

