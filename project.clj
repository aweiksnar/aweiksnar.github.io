(defproject alex "0.1.0-SNAPSHOT"
  :description "my website"
  :url "aweiksnar.github.io"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [garden "1.2.1"]
                 [prismatic/dommy "0.1.3"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]
                 [com.cemerick/piggieback "0.1.3"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-garden "0.1.9"]
            [com.cemerick/austin "0.1.5"]]

  :garden {:builds [{:id "main"
                     :stylesheet alex.style/main
                     :compiler {:output-to "main.css"}}]}
  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "alex"
              :source-paths ["src"]
              :compiler {
                :output-to "alex.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})

;; scripts
;; lein cljsbuild auto
;; lein garden auto

;; in a lein repl
;; (cemerick.austin.repls/exec)
