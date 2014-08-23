(defproject alex "0.1.0-SNAPSHOT"
  :description "my website"
  :url "aweiksnar.github.io"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [garden "1.2.1"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-garden "0.1.9"]]

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
