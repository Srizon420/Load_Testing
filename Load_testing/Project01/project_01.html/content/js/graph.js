/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 11515.0, "minX": 0.0, "maxY": 426785.0, "series": [{"data": [[0.0, 11515.0], [0.1, 11515.0], [0.2, 11515.0], [0.3, 11515.0], [0.4, 11515.0], [0.5, 11515.0], [0.6, 11515.0], [0.7, 11515.0], [0.8, 11515.0], [0.9, 11515.0], [1.0, 11913.0], [1.1, 11913.0], [1.2, 11913.0], [1.3, 11913.0], [1.4, 11913.0], [1.5, 11913.0], [1.6, 11913.0], [1.7, 11913.0], [1.8, 11913.0], [1.9, 11913.0], [2.0, 12213.0], [2.1, 12213.0], [2.2, 12213.0], [2.3, 12213.0], [2.4, 12213.0], [2.5, 12213.0], [2.6, 12213.0], [2.7, 12213.0], [2.8, 12213.0], [2.9, 12213.0], [3.0, 12594.0], [3.1, 12594.0], [3.2, 12594.0], [3.3, 12594.0], [3.4, 12594.0], [3.5, 12594.0], [3.6, 12594.0], [3.7, 12594.0], [3.8, 12594.0], [3.9, 12594.0], [4.0, 13146.0], [4.1, 13146.0], [4.2, 13146.0], [4.3, 13146.0], [4.4, 13146.0], [4.5, 13146.0], [4.6, 13146.0], [4.7, 13146.0], [4.8, 13146.0], [4.9, 13146.0], [5.0, 13218.0], [5.1, 13218.0], [5.2, 13218.0], [5.3, 13218.0], [5.4, 13218.0], [5.5, 13218.0], [5.6, 13218.0], [5.7, 13218.0], [5.8, 13218.0], [5.9, 13218.0], [6.0, 13361.0], [6.1, 13361.0], [6.2, 13361.0], [6.3, 13361.0], [6.4, 13361.0], [6.5, 13361.0], [6.6, 13361.0], [6.7, 13361.0], [6.8, 13361.0], [6.9, 13361.0], [7.0, 14237.0], [7.1, 14237.0], [7.2, 14237.0], [7.3, 14237.0], [7.4, 14237.0], [7.5, 14237.0], [7.6, 14237.0], [7.7, 14237.0], [7.8, 14237.0], [7.9, 14237.0], [8.0, 14441.0], [8.1, 14441.0], [8.2, 14441.0], [8.3, 14441.0], [8.4, 14441.0], [8.5, 14441.0], [8.6, 14441.0], [8.7, 14441.0], [8.8, 14441.0], [8.9, 14441.0], [9.0, 14460.0], [9.1, 14460.0], [9.2, 14460.0], [9.3, 14460.0], [9.4, 14460.0], [9.5, 14460.0], [9.6, 14460.0], [9.7, 14460.0], [9.8, 14460.0], [9.9, 14460.0], [10.0, 14579.0], [10.1, 14579.0], [10.2, 14579.0], [10.3, 14579.0], [10.4, 14579.0], [10.5, 14579.0], [10.6, 14579.0], [10.7, 14579.0], [10.8, 14579.0], [10.9, 14579.0], [11.0, 15270.0], [11.1, 15270.0], [11.2, 15270.0], [11.3, 15270.0], [11.4, 15270.0], [11.5, 15270.0], [11.6, 15270.0], [11.7, 15270.0], [11.8, 15270.0], [11.9, 15270.0], [12.0, 15428.0], [12.1, 15428.0], [12.2, 15428.0], [12.3, 15428.0], [12.4, 15428.0], [12.5, 15428.0], [12.6, 15428.0], [12.7, 15428.0], [12.8, 15428.0], [12.9, 15428.0], [13.0, 15450.0], [13.1, 15450.0], [13.2, 15450.0], [13.3, 15450.0], [13.4, 15450.0], [13.5, 15450.0], [13.6, 15450.0], [13.7, 15450.0], [13.8, 15450.0], [13.9, 15450.0], [14.0, 15634.0], [14.1, 15634.0], [14.2, 15634.0], [14.3, 15634.0], [14.4, 15634.0], [14.5, 15634.0], [14.6, 15634.0], [14.7, 15634.0], [14.8, 15634.0], [14.9, 15634.0], [15.0, 15741.0], [15.1, 15741.0], [15.2, 15741.0], [15.3, 15741.0], [15.4, 15741.0], [15.5, 15741.0], [15.6, 15741.0], [15.7, 15741.0], [15.8, 15741.0], [15.9, 15741.0], [16.0, 16379.0], [16.1, 16379.0], [16.2, 16379.0], [16.3, 16379.0], [16.4, 16379.0], [16.5, 16379.0], [16.6, 16379.0], [16.7, 16379.0], [16.8, 16379.0], [16.9, 16379.0], [17.0, 16709.0], [17.1, 16709.0], [17.2, 16709.0], [17.3, 16709.0], [17.4, 16709.0], [17.5, 16709.0], [17.6, 16709.0], [17.7, 16709.0], [17.8, 16709.0], [17.9, 16709.0], [18.0, 16897.0], [18.1, 16897.0], [18.2, 16897.0], [18.3, 16897.0], [18.4, 16897.0], [18.5, 16897.0], [18.6, 16897.0], [18.7, 16897.0], [18.8, 16897.0], [18.9, 16897.0], [19.0, 17066.0], [19.1, 17066.0], [19.2, 17066.0], [19.3, 17066.0], [19.4, 17066.0], [19.5, 17066.0], [19.6, 17066.0], [19.7, 17066.0], [19.8, 17066.0], [19.9, 17066.0], [20.0, 17385.0], [20.1, 17385.0], [20.2, 17385.0], [20.3, 17385.0], [20.4, 17385.0], [20.5, 17385.0], [20.6, 17385.0], [20.7, 17385.0], [20.8, 17385.0], [20.9, 17385.0], [21.0, 17786.0], [21.1, 17786.0], [21.2, 17786.0], [21.3, 17786.0], [21.4, 17786.0], [21.5, 17786.0], [21.6, 17786.0], [21.7, 17786.0], [21.8, 17786.0], [21.9, 17786.0], [22.0, 18122.0], [22.1, 18122.0], [22.2, 18122.0], [22.3, 18122.0], [22.4, 18122.0], [22.5, 18122.0], [22.6, 18122.0], [22.7, 18122.0], [22.8, 18122.0], [22.9, 18122.0], [23.0, 18224.0], [23.1, 18224.0], [23.2, 18224.0], [23.3, 18224.0], [23.4, 18224.0], [23.5, 18224.0], [23.6, 18224.0], [23.7, 18224.0], [23.8, 18224.0], [23.9, 18224.0], [24.0, 18385.0], [24.1, 18385.0], [24.2, 18385.0], [24.3, 18385.0], [24.4, 18385.0], [24.5, 18385.0], [24.6, 18385.0], [24.7, 18385.0], [24.8, 18385.0], [24.9, 18385.0], [25.0, 18758.0], [25.1, 18758.0], [25.2, 18758.0], [25.3, 18758.0], [25.4, 18758.0], [25.5, 18758.0], [25.6, 18758.0], [25.7, 18758.0], [25.8, 18758.0], [25.9, 18758.0], [26.0, 18933.0], [26.1, 18933.0], [26.2, 18933.0], [26.3, 18933.0], [26.4, 18933.0], [26.5, 18933.0], [26.6, 18933.0], [26.7, 18933.0], [26.8, 18933.0], [26.9, 18933.0], [27.0, 19143.0], [27.1, 19143.0], [27.2, 19143.0], [27.3, 19143.0], [27.4, 19143.0], [27.5, 19143.0], [27.6, 19143.0], [27.7, 19143.0], [27.8, 19143.0], [27.9, 19143.0], [28.0, 19263.0], [28.1, 19263.0], [28.2, 19263.0], [28.3, 19263.0], [28.4, 19263.0], [28.5, 19263.0], [28.6, 19263.0], [28.7, 19263.0], [28.8, 19263.0], [28.9, 19263.0], [29.0, 19368.0], [29.1, 19368.0], [29.2, 19368.0], [29.3, 19368.0], [29.4, 19368.0], [29.5, 19368.0], [29.6, 19368.0], [29.7, 19368.0], [29.8, 19368.0], [29.9, 19368.0], [30.0, 19417.0], [30.1, 19417.0], [30.2, 19417.0], [30.3, 19417.0], [30.4, 19417.0], [30.5, 19417.0], [30.6, 19417.0], [30.7, 19417.0], [30.8, 19417.0], [30.9, 19417.0], [31.0, 19658.0], [31.1, 19658.0], [31.2, 19658.0], [31.3, 19658.0], [31.4, 19658.0], [31.5, 19658.0], [31.6, 19658.0], [31.7, 19658.0], [31.8, 19658.0], [31.9, 19658.0], [32.0, 20161.0], [32.1, 20161.0], [32.2, 20161.0], [32.3, 20161.0], [32.4, 20161.0], [32.5, 20161.0], [32.6, 20161.0], [32.7, 20161.0], [32.8, 20161.0], [32.9, 20161.0], [33.0, 20576.0], [33.1, 20576.0], [33.2, 20576.0], [33.3, 20576.0], [33.4, 20576.0], [33.5, 20576.0], [33.6, 20576.0], [33.7, 20576.0], [33.8, 20576.0], [33.9, 20576.0], [34.0, 20603.0], [34.1, 20603.0], [34.2, 20603.0], [34.3, 20603.0], [34.4, 20603.0], [34.5, 20603.0], [34.6, 20603.0], [34.7, 20603.0], [34.8, 20603.0], [34.9, 20603.0], [35.0, 20934.0], [35.1, 20934.0], [35.2, 20934.0], [35.3, 20934.0], [35.4, 20934.0], [35.5, 20934.0], [35.6, 20934.0], [35.7, 20934.0], [35.8, 20934.0], [35.9, 20934.0], [36.0, 21143.0], [36.1, 21143.0], [36.2, 21143.0], [36.3, 21143.0], [36.4, 21143.0], [36.5, 21143.0], [36.6, 21143.0], [36.7, 21143.0], [36.8, 21143.0], [36.9, 21143.0], [37.0, 21363.0], [37.1, 21363.0], [37.2, 21363.0], [37.3, 21363.0], [37.4, 21363.0], [37.5, 21363.0], [37.6, 21363.0], [37.7, 21363.0], [37.8, 21363.0], [37.9, 21363.0], [38.0, 21403.0], [38.1, 21403.0], [38.2, 21403.0], [38.3, 21403.0], [38.4, 21403.0], [38.5, 21403.0], [38.6, 21403.0], [38.7, 21403.0], [38.8, 21403.0], [38.9, 21403.0], [39.0, 21541.0], [39.1, 21541.0], [39.2, 21541.0], [39.3, 21541.0], [39.4, 21541.0], [39.5, 21541.0], [39.6, 21541.0], [39.7, 21541.0], [39.8, 21541.0], [39.9, 21541.0], [40.0, 21640.0], [40.1, 21640.0], [40.2, 21640.0], [40.3, 21640.0], [40.4, 21640.0], [40.5, 21640.0], [40.6, 21640.0], [40.7, 21640.0], [40.8, 21640.0], [40.9, 21640.0], [41.0, 21677.0], [41.1, 21677.0], [41.2, 21677.0], [41.3, 21677.0], [41.4, 21677.0], [41.5, 21677.0], [41.6, 21677.0], [41.7, 21677.0], [41.8, 21677.0], [41.9, 21677.0], [42.0, 21843.0], [42.1, 21843.0], [42.2, 21843.0], [42.3, 21843.0], [42.4, 21843.0], [42.5, 21843.0], [42.6, 21843.0], [42.7, 21843.0], [42.8, 21843.0], [42.9, 21843.0], [43.0, 22071.0], [43.1, 22071.0], [43.2, 22071.0], [43.3, 22071.0], [43.4, 22071.0], [43.5, 22071.0], [43.6, 22071.0], [43.7, 22071.0], [43.8, 22071.0], [43.9, 22071.0], [44.0, 22337.0], [44.1, 22337.0], [44.2, 22337.0], [44.3, 22337.0], [44.4, 22337.0], [44.5, 22337.0], [44.6, 22337.0], [44.7, 22337.0], [44.8, 22337.0], [44.9, 22337.0], [45.0, 22406.0], [45.1, 22406.0], [45.2, 22406.0], [45.3, 22406.0], [45.4, 22406.0], [45.5, 22406.0], [45.6, 22406.0], [45.7, 22406.0], [45.8, 22406.0], [45.9, 22406.0], [46.0, 22820.0], [46.1, 22820.0], [46.2, 22820.0], [46.3, 22820.0], [46.4, 22820.0], [46.5, 22820.0], [46.6, 22820.0], [46.7, 22820.0], [46.8, 22820.0], [46.9, 22820.0], [47.0, 22867.0], [47.1, 22867.0], [47.2, 22867.0], [47.3, 22867.0], [47.4, 22867.0], [47.5, 22867.0], [47.6, 22867.0], [47.7, 22867.0], [47.8, 22867.0], [47.9, 22867.0], [48.0, 23012.0], [48.1, 23012.0], [48.2, 23012.0], [48.3, 23012.0], [48.4, 23012.0], [48.5, 23012.0], [48.6, 23012.0], [48.7, 23012.0], [48.8, 23012.0], [48.9, 23012.0], [49.0, 23133.0], [49.1, 23133.0], [49.2, 23133.0], [49.3, 23133.0], [49.4, 23133.0], [49.5, 23133.0], [49.6, 23133.0], [49.7, 23133.0], [49.8, 23133.0], [49.9, 23133.0], [50.0, 23161.0], [50.1, 23161.0], [50.2, 23161.0], [50.3, 23161.0], [50.4, 23161.0], [50.5, 23161.0], [50.6, 23161.0], [50.7, 23161.0], [50.8, 23161.0], [50.9, 23161.0], [51.0, 23357.0], [51.1, 23357.0], [51.2, 23357.0], [51.3, 23357.0], [51.4, 23357.0], [51.5, 23357.0], [51.6, 23357.0], [51.7, 23357.0], [51.8, 23357.0], [51.9, 23357.0], [52.0, 23456.0], [52.1, 23456.0], [52.2, 23456.0], [52.3, 23456.0], [52.4, 23456.0], [52.5, 23456.0], [52.6, 23456.0], [52.7, 23456.0], [52.8, 23456.0], [52.9, 23456.0], [53.0, 23540.0], [53.1, 23540.0], [53.2, 23540.0], [53.3, 23540.0], [53.4, 23540.0], [53.5, 23540.0], [53.6, 23540.0], [53.7, 23540.0], [53.8, 23540.0], [53.9, 23540.0], [54.0, 23676.0], [54.1, 23676.0], [54.2, 23676.0], [54.3, 23676.0], [54.4, 23676.0], [54.5, 23676.0], [54.6, 23676.0], [54.7, 23676.0], [54.8, 23676.0], [54.9, 23676.0], [55.0, 23751.0], [55.1, 23751.0], [55.2, 23751.0], [55.3, 23751.0], [55.4, 23751.0], [55.5, 23751.0], [55.6, 23751.0], [55.7, 23751.0], [55.8, 23751.0], [55.9, 23751.0], [56.0, 23838.0], [56.1, 23838.0], [56.2, 23838.0], [56.3, 23838.0], [56.4, 23838.0], [56.5, 23838.0], [56.6, 23838.0], [56.7, 23838.0], [56.8, 23838.0], [56.9, 23838.0], [57.0, 24129.0], [57.1, 24129.0], [57.2, 24129.0], [57.3, 24129.0], [57.4, 24129.0], [57.5, 24129.0], [57.6, 24129.0], [57.7, 24129.0], [57.8, 24129.0], [57.9, 24129.0], [58.0, 24265.0], [58.1, 24265.0], [58.2, 24265.0], [58.3, 24265.0], [58.4, 24265.0], [58.5, 24265.0], [58.6, 24265.0], [58.7, 24265.0], [58.8, 24265.0], [58.9, 24265.0], [59.0, 24431.0], [59.1, 24431.0], [59.2, 24431.0], [59.3, 24431.0], [59.4, 24431.0], [59.5, 24431.0], [59.6, 24431.0], [59.7, 24431.0], [59.8, 24431.0], [59.9, 24431.0], [60.0, 24572.0], [60.1, 24572.0], [60.2, 24572.0], [60.3, 24572.0], [60.4, 24572.0], [60.5, 24572.0], [60.6, 24572.0], [60.7, 24572.0], [60.8, 24572.0], [60.9, 24572.0], [61.0, 24622.0], [61.1, 24622.0], [61.2, 24622.0], [61.3, 24622.0], [61.4, 24622.0], [61.5, 24622.0], [61.6, 24622.0], [61.7, 24622.0], [61.8, 24622.0], [61.9, 24622.0], [62.0, 24834.0], [62.1, 24834.0], [62.2, 24834.0], [62.3, 24834.0], [62.4, 24834.0], [62.5, 24834.0], [62.6, 24834.0], [62.7, 24834.0], [62.8, 24834.0], [62.9, 24834.0], [63.0, 24931.0], [63.1, 24931.0], [63.2, 24931.0], [63.3, 24931.0], [63.4, 24931.0], [63.5, 24931.0], [63.6, 24931.0], [63.7, 24931.0], [63.8, 24931.0], [63.9, 24931.0], [64.0, 25187.0], [64.1, 25187.0], [64.2, 25187.0], [64.3, 25187.0], [64.4, 25187.0], [64.5, 25187.0], [64.6, 25187.0], [64.7, 25187.0], [64.8, 25187.0], [64.9, 25187.0], [65.0, 25582.0], [65.1, 25582.0], [65.2, 25582.0], [65.3, 25582.0], [65.4, 25582.0], [65.5, 25582.0], [65.6, 25582.0], [65.7, 25582.0], [65.8, 25582.0], [65.9, 25582.0], [66.0, 25633.0], [66.1, 25633.0], [66.2, 25633.0], [66.3, 25633.0], [66.4, 25633.0], [66.5, 25633.0], [66.6, 25633.0], [66.7, 25633.0], [66.8, 25633.0], [66.9, 25633.0], [67.0, 25650.0], [67.1, 25650.0], [67.2, 25650.0], [67.3, 25650.0], [67.4, 25650.0], [67.5, 25650.0], [67.6, 25650.0], [67.7, 25650.0], [67.8, 25650.0], [67.9, 25650.0], [68.0, 25876.0], [68.1, 25876.0], [68.2, 25876.0], [68.3, 25876.0], [68.4, 25876.0], [68.5, 25876.0], [68.6, 25876.0], [68.7, 25876.0], [68.8, 25876.0], [68.9, 25876.0], [69.0, 25945.0], [69.1, 25945.0], [69.2, 25945.0], [69.3, 25945.0], [69.4, 25945.0], [69.5, 25945.0], [69.6, 25945.0], [69.7, 25945.0], [69.8, 25945.0], [69.9, 25945.0], [70.0, 25953.0], [70.1, 25953.0], [70.2, 25953.0], [70.3, 25953.0], [70.4, 25953.0], [70.5, 25953.0], [70.6, 25953.0], [70.7, 25953.0], [70.8, 25953.0], [70.9, 25953.0], [71.0, 25979.0], [71.1, 25979.0], [71.2, 25979.0], [71.3, 25979.0], [71.4, 25979.0], [71.5, 25979.0], [71.6, 25979.0], [71.7, 25979.0], [71.8, 25979.0], [71.9, 25979.0], [72.0, 26029.0], [72.1, 26029.0], [72.2, 26029.0], [72.3, 26029.0], [72.4, 26029.0], [72.5, 26029.0], [72.6, 26029.0], [72.7, 26029.0], [72.8, 26029.0], [72.9, 26029.0], [73.0, 26174.0], [73.1, 26174.0], [73.2, 26174.0], [73.3, 26174.0], [73.4, 26174.0], [73.5, 26174.0], [73.6, 26174.0], [73.7, 26174.0], [73.8, 26174.0], [73.9, 26174.0], [74.0, 26198.0], [74.1, 26198.0], [74.2, 26198.0], [74.3, 26198.0], [74.4, 26198.0], [74.5, 26198.0], [74.6, 26198.0], [74.7, 26198.0], [74.8, 26198.0], [74.9, 26198.0], [75.0, 26220.0], [75.1, 26220.0], [75.2, 26220.0], [75.3, 26220.0], [75.4, 26220.0], [75.5, 26220.0], [75.6, 26220.0], [75.7, 26220.0], [75.8, 26220.0], [75.9, 26220.0], [76.0, 26246.0], [76.1, 26246.0], [76.2, 26246.0], [76.3, 26246.0], [76.4, 26246.0], [76.5, 26246.0], [76.6, 26246.0], [76.7, 26246.0], [76.8, 26246.0], [76.9, 26246.0], [77.0, 26310.0], [77.1, 26310.0], [77.2, 26310.0], [77.3, 26310.0], [77.4, 26310.0], [77.5, 26310.0], [77.6, 26310.0], [77.7, 26310.0], [77.8, 26310.0], [77.9, 26310.0], [78.0, 26367.0], [78.1, 26367.0], [78.2, 26367.0], [78.3, 26367.0], [78.4, 26367.0], [78.5, 26367.0], [78.6, 26367.0], [78.7, 26367.0], [78.8, 26367.0], [78.9, 26367.0], [79.0, 26539.0], [79.1, 26539.0], [79.2, 26539.0], [79.3, 26539.0], [79.4, 26539.0], [79.5, 26539.0], [79.6, 26539.0], [79.7, 26539.0], [79.8, 26539.0], [79.9, 26539.0], [80.0, 26624.0], [80.1, 26624.0], [80.2, 26624.0], [80.3, 26624.0], [80.4, 26624.0], [80.5, 26624.0], [80.6, 26624.0], [80.7, 26624.0], [80.8, 26624.0], [80.9, 26624.0], [81.0, 26669.0], [81.1, 26669.0], [81.2, 26669.0], [81.3, 26669.0], [81.4, 26669.0], [81.5, 26669.0], [81.6, 26669.0], [81.7, 26669.0], [81.8, 26669.0], [81.9, 26669.0], [82.0, 26698.0], [82.1, 26698.0], [82.2, 26698.0], [82.3, 26698.0], [82.4, 26698.0], [82.5, 26698.0], [82.6, 26698.0], [82.7, 26698.0], [82.8, 26698.0], [82.9, 26698.0], [83.0, 26940.0], [83.1, 26940.0], [83.2, 26940.0], [83.3, 26940.0], [83.4, 26940.0], [83.5, 26940.0], [83.6, 26940.0], [83.7, 26940.0], [83.8, 26940.0], [83.9, 26940.0], [84.0, 26949.0], [84.1, 26949.0], [84.2, 26949.0], [84.3, 26949.0], [84.4, 26949.0], [84.5, 26949.0], [84.6, 26949.0], [84.7, 26949.0], [84.8, 26949.0], [84.9, 26949.0], [85.0, 26989.0], [85.1, 26989.0], [85.2, 26989.0], [85.3, 26989.0], [85.4, 26989.0], [85.5, 26989.0], [85.6, 26989.0], [85.7, 26989.0], [85.8, 26989.0], [85.9, 26989.0], [86.0, 27003.0], [86.1, 27003.0], [86.2, 27003.0], [86.3, 27003.0], [86.4, 27003.0], [86.5, 27003.0], [86.6, 27003.0], [86.7, 27003.0], [86.8, 27003.0], [86.9, 27003.0], [87.0, 27021.0], [87.1, 27021.0], [87.2, 27021.0], [87.3, 27021.0], [87.4, 27021.0], [87.5, 27021.0], [87.6, 27021.0], [87.7, 27021.0], [87.8, 27021.0], [87.9, 27021.0], [88.0, 27101.0], [88.1, 27101.0], [88.2, 27101.0], [88.3, 27101.0], [88.4, 27101.0], [88.5, 27101.0], [88.6, 27101.0], [88.7, 27101.0], [88.8, 27101.0], [88.9, 27101.0], [89.0, 27251.0], [89.1, 27251.0], [89.2, 27251.0], [89.3, 27251.0], [89.4, 27251.0], [89.5, 27251.0], [89.6, 27251.0], [89.7, 27251.0], [89.8, 27251.0], [89.9, 27251.0], [90.0, 27711.0], [90.1, 27711.0], [90.2, 27711.0], [90.3, 27711.0], [90.4, 27711.0], [90.5, 27711.0], [90.6, 27711.0], [90.7, 27711.0], [90.8, 27711.0], [90.9, 27711.0], [91.0, 27941.0], [91.1, 27941.0], [91.2, 27941.0], [91.3, 27941.0], [91.4, 27941.0], [91.5, 27941.0], [91.6, 27941.0], [91.7, 27941.0], [91.8, 27941.0], [91.9, 27941.0], [92.0, 27971.0], [92.1, 27971.0], [92.2, 27971.0], [92.3, 27971.0], [92.4, 27971.0], [92.5, 27971.0], [92.6, 27971.0], [92.7, 27971.0], [92.8, 27971.0], [92.9, 27971.0], [93.0, 29649.0], [93.1, 29649.0], [93.2, 29649.0], [93.3, 29649.0], [93.4, 29649.0], [93.5, 29649.0], [93.6, 29649.0], [93.7, 29649.0], [93.8, 29649.0], [93.9, 29649.0], [94.0, 30353.0], [94.1, 30353.0], [94.2, 30353.0], [94.3, 30353.0], [94.4, 30353.0], [94.5, 30353.0], [94.6, 30353.0], [94.7, 30353.0], [94.8, 30353.0], [94.9, 30353.0], [95.0, 31015.0], [95.1, 31015.0], [95.2, 31015.0], [95.3, 31015.0], [95.4, 31015.0], [95.5, 31015.0], [95.6, 31015.0], [95.7, 31015.0], [95.8, 31015.0], [95.9, 31015.0], [96.0, 40991.0], [96.1, 40991.0], [96.2, 40991.0], [96.3, 40991.0], [96.4, 40991.0], [96.5, 40991.0], [96.6, 40991.0], [96.7, 40991.0], [96.8, 40991.0], [96.9, 40991.0], [97.0, 42250.0], [97.1, 42250.0], [97.2, 42250.0], [97.3, 42250.0], [97.4, 42250.0], [97.5, 42250.0], [97.6, 42250.0], [97.7, 42250.0], [97.8, 42250.0], [97.9, 42250.0], [98.0, 422258.0], [98.1, 422258.0], [98.2, 422258.0], [98.3, 422258.0], [98.4, 422258.0], [98.5, 422258.0], [98.6, 422258.0], [98.7, 422258.0], [98.8, 422258.0], [98.9, 422258.0], [99.0, 426785.0], [99.1, 426785.0], [99.2, 426785.0], [99.3, 426785.0], [99.4, 426785.0], [99.5, 426785.0], [99.6, 426785.0], [99.7, 426785.0], [99.8, 426785.0], [99.9, 426785.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 11500.0, "maxY": 3.0, "series": [{"data": [[426700.0, 1.0], [11500.0, 1.0], [11900.0, 1.0], [12200.0, 1.0], [12500.0, 1.0], [13300.0, 1.0], [13100.0, 1.0], [13200.0, 1.0], [14200.0, 1.0], [14400.0, 2.0], [14500.0, 1.0], [15200.0, 1.0], [15400.0, 2.0], [15600.0, 1.0], [15700.0, 1.0], [16300.0, 1.0], [17000.0, 1.0], [16700.0, 1.0], [16800.0, 1.0], [17300.0, 1.0], [17700.0, 1.0], [18200.0, 1.0], [18300.0, 1.0], [18100.0, 1.0], [18700.0, 1.0], [19300.0, 1.0], [19400.0, 1.0], [18900.0, 1.0], [19100.0, 1.0], [19200.0, 1.0], [19600.0, 1.0], [20100.0, 1.0], [20500.0, 1.0], [20600.0, 1.0], [21300.0, 1.0], [21500.0, 1.0], [20900.0, 1.0], [21100.0, 1.0], [21400.0, 1.0], [21600.0, 2.0], [21800.0, 1.0], [22000.0, 1.0], [22300.0, 1.0], [22400.0, 1.0], [22800.0, 2.0], [23100.0, 2.0], [23400.0, 1.0], [23500.0, 1.0], [23000.0, 1.0], [23300.0, 1.0], [23600.0, 1.0], [24100.0, 1.0], [24200.0, 1.0], [24400.0, 1.0], [23800.0, 1.0], [23700.0, 1.0], [24500.0, 1.0], [24800.0, 1.0], [24900.0, 1.0], [25100.0, 1.0], [24600.0, 1.0], [25500.0, 1.0], [25800.0, 1.0], [25900.0, 3.0], [26100.0, 2.0], [26300.0, 2.0], [25600.0, 2.0], [26000.0, 1.0], [26600.0, 3.0], [26500.0, 1.0], [26200.0, 2.0], [26900.0, 3.0], [27000.0, 2.0], [27200.0, 1.0], [27100.0, 1.0], [27900.0, 2.0], [27700.0, 1.0], [29600.0, 1.0], [30300.0, 1.0], [31000.0, 1.0], [40900.0, 1.0], [42200.0, 1.0], [422200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 426700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 98.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 98.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.65952422E12, "maxY": 52.56250000000003, "series": [{"data": [[1.65952428E12, 3.5], [1.65952422E12, 52.56250000000003], [1.65952464E12, 2.0]], "isOverall": false, "label": "Thread Group2", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65952464E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 11515.0, "minX": 2.0, "maxY": 424521.5, "series": [{"data": [[2.0, 424521.5], [3.0, 42250.0], [4.0, 40991.0], [5.0, 31015.0], [6.0, 30353.0], [7.0, 29649.0], [8.0, 27711.0], [9.0, 27941.0], [10.0, 26220.0], [11.0, 26246.0], [12.0, 27971.0], [13.0, 27101.0], [14.0, 25953.0], [16.0, 26598.0], [17.0, 27021.0], [18.0, 26949.0], [19.0, 25650.0], [20.0, 25582.0], [21.0, 26539.0], [22.0, 26624.0], [23.0, 27003.0], [24.0, 26940.0], [25.0, 26989.0], [26.0, 26698.0], [27.0, 26367.0], [28.0, 26669.0], [30.0, 26101.5], [31.0, 25633.0], [33.0, 24572.0], [32.0, 24622.0], [35.0, 26254.0], [37.0, 25979.0], [36.0, 25876.0], [39.0, 25187.0], [38.0, 23751.0], [41.0, 23357.0], [40.0, 23838.0], [43.0, 23796.0], [45.0, 24834.0], [44.0, 24931.0], [47.0, 24265.0], [46.0, 23012.0], [49.0, 22406.0], [48.0, 22867.0], [51.0, 23676.0], [50.0, 24129.0], [53.0, 23456.0], [52.0, 23540.0], [55.0, 21403.0], [54.0, 23133.0], [57.0, 22820.0], [56.0, 21143.0], [59.0, 22337.0], [58.0, 20934.0], [61.0, 21541.0], [60.0, 22071.0], [63.0, 20161.0], [62.0, 21677.0], [67.0, 21363.0], [66.0, 19658.0], [65.0, 21640.0], [64.0, 21843.0], [71.0, 18933.0], [70.0, 20603.0], [69.0, 19143.0], [68.0, 19263.0], [75.0, 18758.0], [74.0, 19392.5], [72.0, 20576.0], [79.0, 16709.0], [78.0, 18122.0], [77.0, 16897.0], [76.0, 17385.0], [83.0, 17066.0], [82.0, 16379.0], [81.0, 18224.0], [80.0, 18385.0], [87.0, 15450.0], [86.0, 15634.0], [85.0, 15741.0], [84.0, 17786.0], [91.0, 14450.5], [89.0, 14579.0], [88.0, 15270.0], [95.0, 13146.0], [94.0, 13218.0], [93.0, 14237.0], [92.0, 15428.0], [99.0, 12213.0], [98.0, 11515.0], [97.0, 12594.0], [96.0, 13361.0], [100.0, 11913.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.57000000000003, 30348.43]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.65952422E12, "maxY": 371533.7833333333, "series": [{"data": [[1.65952428E12, 7740.583333333333], [1.65952422E12, 371533.7833333333], [1.65952464E12, 87.83333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65952428E12, 7.366666666666666], [1.65952422E12, 353.6], [1.65952464E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65952464E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 21901.65625, "minX": 1.65952422E12, "maxY": 424521.5, "series": [{"data": [[1.65952428E12, 41620.5], [1.65952422E12, 21901.65625], [1.65952464E12, 424521.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65952464E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1066.5, "minX": 1.65952422E12, "maxY": 3014.697916666666, "series": [{"data": [[1.65952428E12, 1066.5], [1.65952422E12, 3014.697916666666], [1.65952464E12, 1283.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65952464E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 917.0, "minX": 1.65952422E12, "maxY": 2106.718749999999, "series": [{"data": [[1.65952428E12, 917.0], [1.65952422E12, 2106.718749999999], [1.65952464E12, 1124.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65952464E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 11515.0, "minX": 1.65952422E12, "maxY": 42250.0, "series": [{"data": [[1.65952428E12, 42250.0], [1.65952422E12, 31015.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65952428E12, 42250.0], [1.65952422E12, 27008.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65952428E12, 42250.0], [1.65952422E12, 31015.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65952428E12, 42250.0], [1.65952422E12, 27945.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65952428E12, 40991.0], [1.65952422E12, 11515.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65952428E12, 41620.5], [1.65952422E12, 22939.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65952428E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 12213.0, "minX": 1.0, "maxY": 424521.5, "series": [{"data": [[1.0, 20536.0], [2.0, 24533.0], [4.0, 16319.0], [8.0, 25531.5], [9.0, 23838.0], [5.0, 17794.5], [10.0, 26985.0], [3.0, 12213.0], [6.0, 21737.0], [13.0, 26539.0], [7.0, 19658.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 424521.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1283.5, "minX": 1.0, "maxY": 4397.0, "series": [{"data": [[1.0, 2243.0], [2.0, 1477.0], [4.0, 3232.5], [8.0, 2740.5], [9.0, 2574.0], [5.0, 1817.5], [10.0, 1944.5], [3.0, 1537.0], [6.0, 2773.5], [13.0, 1666.0], [7.0, 4397.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 1283.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 13.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.65952422E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.65952422E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65952422E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65952422E12, "maxY": 1.6, "series": [{"data": [[1.65952428E12, 0.03333333333333333], [1.65952422E12, 1.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65952464E12, 0.03333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65952464E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65952422E12, "maxY": 1.6, "series": [{"data": [[1.65952428E12, 0.03333333333333333], [1.65952422E12, 1.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65952464E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65952464E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65952422E12, "maxY": 1.6, "series": [{"data": [[1.65952428E12, 0.03333333333333333], [1.65952422E12, 1.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65952464E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65952464E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

