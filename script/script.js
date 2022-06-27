var tmp = 0;
$(document).ready(function() {
  // Selectタグの変化
  $("select").change(function() {
    if (this.value !== "-選択してください-") {
      if (this.value === "棒グラフ")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-chart","google.visualization.ColumnChart");
            }
            else if (this.value === "円グラフ")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-chart","google.visualization.PieChart");
            }
            else if (this.value === "線グラフ")
          {
            document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-chart","google.visualization.BarChart");
          }
          if(tmp <= 2)
            {
              tmp++;
            }
      
    }
  });
});


$(document).ready(function() {
        // Selectタグの変化
        $("select").change(function() {
          if (this.value !== "-選択してください-") {
            if (this.value === "管轄保健所数")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E7%AE%A1%E8%BD%84%E4%BF%9D%E5%81%A5%E6%89%80%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E7%AE%A1%E8%BD%84%E4%BF%9D%E5%81%A5%E6%89%80%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "市町村数")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%B8%82%E7%94%BA%E6%9D%91%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%B8%82%E7%94%BA%E6%9D%91%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              
            }
            else if (this.value === "温泉地数")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B8%A9%E6%B3%89%E5%9C%B0%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B8%A9%E6%B3%89%E5%9C%B0%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "源泉総数A+B")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%BA%90%E6%B3%89%E7%B7%8F%E6%95%B0A%2BB> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%BA%90%E6%B3%89%E7%B7%8F%E6%95%B0A%2BB> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "利用源泉数(A)")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%88%A9%E7%94%A8%E6%BA%90%E6%B3%89%E6%95%B0%28A%29> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%88%A9%E7%94%A8%E6%BA%90%E6%B3%89%E6%95%B0%28A%29> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "未利用源泉数(B)")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%9C%AA%E5%88%A9%E7%94%A8%E6%BA%90%E6%B3%89%E6%95%B0%28B%29> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%9C%AA%E5%88%A9%E7%94%A8%E6%BA%90%E6%B3%89%E6%95%B0%28B%29> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "湧出量")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B9%A7%E5%87%BA%E9%87%8F> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B9%A7%E5%87%BA%E9%87%8F> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "宿泊施設数")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%AE%BF%E6%B3%8A%E6%96%BD%E8%A8%AD%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%AE%BF%E6%B3%8A%E6%96%BD%E8%A8%AD%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "収容定員")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%8F%8E%E5%AE%B9%E5%AE%9A%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%8F%8E%E5%AE%B9%E5%AE%9A%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "年度延宿泊利用人員")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%B9%B4%E5%BA%A6%E5%BB%B6%E5%AE%BF%E6%B3%8A%E5%88%A9%E7%94%A8%E4%BA%BA%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%B9%B4%E5%BA%A6%E5%BB%B6%E5%AE%BF%E6%B3%8A%E5%88%A9%E7%94%A8%E4%BA%BA%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "温泉利用の公衆浴場数")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B8%A9%E6%B3%89%E5%88%A9%E7%94%A8%E3%81%AE%E5%85%AC%E8%A1%86%E6%B5%B4%E5%A0%B4%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E6%B8%A9%E6%B3%89%E5%88%A9%E7%94%A8%E3%81%AE%E5%85%AC%E8%A1%86%E6%B5%B4%E5%A0%B4%E6%95%B0> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            else if (this.value === "国民保養温泉地年度延宿泊利用人員")
            {
              document.getElementById("sgvzl_example_query").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%9B%BD%E6%B0%91%E4%BF%9D%E9%A4%8A%E6%B8%A9%E6%B3%89%E5%9C%B0%E5%B9%B4%E5%BA%A6%E5%BB%B6%E5%AE%BF%E6%B3%8A%E5%88%A9%E7%94%A8%E4%BA%BA%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
              document.getElementById("sgvzl_example_table").setAttribute("data-sgvizler-query","select distinct ?都道府県 ?数 where { ?s <http://linkdata.org/property/rdf1s9417i#%E5%9B%BD%E6%B0%91%E4%BF%9D%E9%A4%8A%E6%B8%A9%E6%B3%89%E5%9C%B0%E5%B9%B4%E5%BA%A6%E5%BB%B6%E5%AE%BF%E6%B3%8A%E5%88%A9%E7%94%A8%E4%BA%BA%E5%93%A1> ?数 . ?s <http://www.w3.org/2000/01/rdf-schema#label> ?都道府県 .} LIMIT 50");
            }
            if(tmp <= 2)
            {
              tmp++;
            }
            if ( tmp > 2)
            {
              $(document).ready(function() { sgvizler.containerDrawAll(); });
            }
            
          }
        });
      });

