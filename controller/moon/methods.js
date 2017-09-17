var methods = module.exports = {
    //라우터(url), 검색 키워드, 총 리스트 수, 현재 페이지, 지정할 블럭 크기, 지정할 페이지 수, 1페이지 일 시 페이지 수 표시, 화살표 이동시 1페이지/블럭이동, 처음으로/끝으로 표시유무, 뒤로가기/다음으로 가기 표시유무, 페이지 버튼 모양, 뒤로가기 버튼 모양, 다음으로 버튼 모양, 처음으로 버튼 모양, 끝으로 버튼 모양,
    paging: function(route, keyword, totalCount, thisPage, blockSize, pageSize, minShow=false, block=false, firstEnd=false, showFast=false, numBtn=false, prevBtn=false, nextBtn=false, firstBtn=false, endBtn=false)
    {
        if (typeof (blockSize) === 'undefined' || blockSize == '') {
            blockSize = 5;                
        }
        if (typeof (pageSize) === 'undefined' || pageSize == '') {
            pageSize = 15;
        }

        var pagination;
        var totalPage;
        var nowBlock = Math.ceil(thisPage / blockSize);
        //var totalBlock;

        if ((totalCount % pageSize) > 0) {
            totalPage = Math.floor(totalCount / pageSize) + 1;
        } else {
            totalPage = Math.floor(totalCount / pageSize);
        }
        /*
        if ((totalCount % blockSize) > 0) {
            totalBlock = Math.floor(totalCount / blockSize) + 1;
        } else {
            totalBlock = Math.floor(totalCount / blockSize) + 1;
        }
        */
        if (firstEnd != false) {
            if (firstBtn == false) {
                firstBtn = '<li><a href="1">First</li>';
            } else {
                firstBtn = firstBtn.relpace('-_-num-_-', '1');
            }
            if (endBtn == false) {
                endBtn = '<li><a href="' + totalPage + '">First</li>';
            } else {
                firstBtn = firstBtn.relpace('-_-num-_-', '1');
            }
        } else {
            firstBtn = '';
            endBtn = '';
        }

        if (totalPage > 1) {
            
            var numblock = '';
            var fastblock = '';
            var nextblock = '';
            var startpage = '';
            var loopsize = '';
            var fastview = '';
            var nextview = '';

            var blockminus = (Number(thisPage) - Number(blockSize));
            var blockplus = (Number(thisPage) + Number(blockSize));

            if (thisPage == 1) {

                if (block == false) {
                    if (prevBtn == false) {
                        fastblock = '<li class="disable"><<</li>';
                    } else {
                        fastblock = prevBtn;
                    }
                    if (nextBtn == false) {
                        nextblock = '<li style="cursor: pointer" onclick="location.href=\'' + route + '/' + (Number(thisPage) + 1) + '/' + keyword + '\'">>></li>';
                    } else {
                        nextblock = nextBtn.replace("-_-num-_-", route + '/' + (Number(thisPage) + 1) + '/' + keyword);
                    }
                } else {
                    if (blockplus <= totalPage) {
                        nextview = route + '/' + blockplus + '/' + keyword;                        
                    } else {
                        nextview = route + '/' + totalPage + '/' + keyword;                        
                    }

                    if (nextBtn == false) {
                        nextblock = '<li style="cursor: pointer" onclick="location.href=\'' + nextview + '\'">>></li>';
                    } else {
                        nextblock = nextBtn.replace('-_-num-_-', nextview);
                    }
                }

                startpage = 1;
                loopsize = (totalPage >= blockSize) ? blockSize : totalPage;

            } else if (thisPage == totalPage) {
                
                if (block == false) {
                    if (prevBtn == false) {
                        fastblock = '<li style="cursor: pointer" onclick="location.href=\'' + route + '/' + (Number(thisPage) - 1) + '/' + keyword + '\'"><<</li>';
                    } else {
                        fastblock = prevBtn.replace("-_-num-_-", route + '/' + (Number(thisPage) - 1) + '/' + keyword);
                    }

                    if (nextBtn == false) {
                        nextblock = '<li class="disable">>></li>';
                    } else {
                        nextblock = nextBtn;
                    }
                    
                } else {
                    if (blockminus > 1) {
                        fastview = route + '/' + blockminus + '/' + keyword;                        
                    } else {
                        fastview = route + '/1/' + keyword;                        
                    }

                    if (prevBtn == false) {
                        fastblock = '<li style="cursor: pointer" onclick="location.href=\'' + fastview + '\'"><<</li>';
                    } else {
                        fastblock = prevBtn.replace("-_-num-_-", fastview);
                    }
                }

                startpage = ((totalPage + 1 - blockSize) <= 1) ? 1 : (totalPage + 1 - blockSize);
                loopsize = totalPage;

            } else {

                if (block == false) {
                    if (prevBtn == false) {
                        fastblock = '<li style="cursor: pointer" onclick="location.href=\'' + route + '/' + (Number(thisPage) - 1) + '/' + keyword + '\'"><<</li>';
                    } else {
                        fastblock = prevBtn.replace("-_-num-_-", route + '/' + (Number(thisPage) - 1) + '/' + keyword);
                    }

                    if (nextBtn == false) {
                        nextblock = '<li style="cursor: pointer" onclick="location.href=\'' + route + '/' + (Number(thisPage) + 1) + '/' + keyword + '\'">>></li>';
                    } else {
                        nextblock = nextBtn.replace("-_-num-_-", route + '/' + (Number(thisPage) + 1) + '/' + keyword);
                    }
                } else {
                    if (blockminus > 1) {
                        fastview = route + '/' + blockminus + '/' + keyword;
                    } else {
                        fastview = route + '/1/' + keyword;
                    }

                    if (prevBtn == false) {
                        fastblock = '<li style="cursor: pointer" onclick="location.href=\'' + fastview + '\'"><<</li>';
                    } else {
                        fastblock = prevBtn.replace('-_-num-_-', fastview);
                    }

                    if (blockplus <= totalPage) {
                        nextview = route + '/' + blockplus + '/' + keyword;                        
                    } else {
                        nextview = route + '/' + totalPage + '/' + keyword;
                    }

                    if (nextBtn == false) {
                        nextblock = '<li style="cursor: pointer" onclick="location.href=\'' + nextview + '\'">>></li>';
                    } else {
                        nextblock = prevBtn.replace('-_-num-_-', nextview);
                    }
                }

                startpage = (((Number(thisPage) - Number(blockSize)) + 1) <= 1) ? 1 : ((Number(thisPage) - Number(blockSize)) + 1);
                loopsize = startpage + blockSize - 1;
            }

            for (var i = startpage; i <= loopsize; i++) {
                if (thisPage == i) {
                    if (numBtn == false) {
                        numblock = numblock + '<li class="disable">' + i + '</li>';
                    } else {
                        numblock = numblock + numBtn.replace("-_-num-_-", i);
                    }
                } else {
                    if (numBtn == false) {
                        numblock = numblock + '<li style="cursor: pointer" onclick="location.href=\'' + route + '/' + i + '/' + keyword + '\'">' + i + '</li>';
                    } else {
                        numblock = numblock + "<a href='loction.href=\"" + route + '/' + i + '/' + keyword + "\"" + numBtn.replace("-_-num-_-", i) + "</a>";
                    }
                }
            }

            pagination = firstBtn + fastblock + numblock + nextblock + endBtn;

            return pagination;

        } else {
            if (minShow == false) {
                return "";
            } else {
                if (numBtn != '') {
                    pagination = numBtn.replace("-_-num-_-", '1');
                    return numBtn.replace("-_-num-_-", '1');
                } else {
                    pagination = '<li>1</li>';
                    return pagination;
                }
            }
        }
    }
}
