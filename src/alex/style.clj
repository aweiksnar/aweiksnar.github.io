(ns alex.style
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(def hot-pink "rgb(255, 69, 102)")

(defstyles reset
  [:*
     {:margin (px 0)
      :padding (px 0)}])

(defstyles body
  [:body
    {:font-family "sans-serif"
     :font-size (px 13)
     :line-height 1.5}])

(defstyles site-main-title
  [:#site-main-title
    {:background-color hot-pink
     :color "#fff"
     :margin "0 auto"
     :width "80%"
     :text-align "center"
     :font-size (px 40)}])


(defstyles main
  reset
  body
  site-main-title
  )
