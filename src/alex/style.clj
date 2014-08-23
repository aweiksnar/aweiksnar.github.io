(ns alex.style
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px percent]]
            [garden.stylesheet :refer [at-media]]))

(def color-hot-pink "rgb(255, 69, 102)")
(def color-faint-orange "#FFF9F5")
(def color-black "#000")

(def font-special-elite "Special Elite")

(defstyles reset
  [:*
     {:margin (px 0)
      :padding (px 0)}])

(defstyles body
  [:body
    {:font-family font-special-elite}])

(defstyles centered-fixed-full-width
  {:position "fixed"
   :width (percent 100)
   :left (percent 50)
   :margin-left (percent -50)})

(defstyles site-main-title
  [:#site-main-title
    {:background-color color-faint-orange
     :width (percent 100)
     :line-height (px 100)
     :text-align "center"}
     [:h1
        {:font-size (px 35)
         :color color-black
         :letter-spacing (px 10)
         :transition "font-size 0.25s"}]
     (at-media {:screen true :max-width (px 520)}
         [:h1
           {:font-size (px 25)
            :letter-spacing (px 2)}])])

(defstyles hero-image
  [:#wooly
     {:margin [[(px 100) "auto"]]
      :display "block"}]
   (at-media {:screen true :max-width (px 520)}
     [:#wooly
        {:margin [[(px 40) "auto"]]}]))

(defstyles site-bottom-menu
  [:#site-bottom-menu
     centered-fixed-full-width
     {:background-color color-faint-orange
      :text-align "center"
      :bottom (px 0)}
      [:a
         {:font-family font-special-elite
          :font-size (px 20)
          :line-height (px 80)
          :margin [[0 (px 10)]]
          :color color-black
          :text-decoration "none"}
         [:&:hover
           {:color color-hot-pink}]]])

(defstyles main
  reset
  body
  site-main-title
  hero-image
  site-bottom-menu
  )
