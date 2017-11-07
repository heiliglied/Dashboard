var methods = module.exports = {

    //총 리스트 수, 현재 페이지, 지정할 블럭 크기, 지정할 페이지 수, 1페이지 일 시 페이지 수 표시, 화살표 이동시 1페이지/블럭이동, 처음으로/끝으로 표시유무, 뒤로가기/다음으로 가기 표시유무, 페이지 버튼 모양, 뒤로가기 버튼 모양, 다음으로 버튼 모양, 처음으로 버튼 모양, 끝으로 버튼 모양
    paging: function(totalCount, thisPage, link, blockSize=false, pageSize=false, minShow=false, block=false, firstEnd=false, showFast=false, numBtn=false, prevBtn=false, nextBtn=false, firstBtn=false, endBtn=false)
    {
        if (typeof (blockSize) === 'undefined' || blockSize == '') {
            blockSize = 5;
        }
        if (typeof (pageSize) === 'undefined' || pageSize == '') {
            pageSize = 15;
        }

        var pagination; //pagination string pool;
        var totalPage;
        var nowBlock;
        var totalBlock;

        var nowBlock = Math.ceil(thisPage / blockSize);

        if ((totalCount % pageSize) > 0) {
            totalPage = Math.floor(totalCount / pageSize) + 1;
        } else {
            totalPage = Math.floor(totalCount / pageSize);
        }

        if (firstEnd != false) {
            if (firstBtn == false) {
                firstBtn = '<li onclick="' + link.replace('-_-num-_-', '1'); + '">First</li>';
            } else {
                firstBtn = firstBtn.replace('-_-num-_-', '1');
            }
            if (endBtn == false) {
                endBtn = '<li onclick="' + link.replace('-_-num-_-', '1'); + '">First</li>';
            } else {
                endBtn = endBtn.replace('-_-num-_-', '1');
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
                    if (nextBtn == false) {
                        nextblock = '<li onclick="' + link.replace('-_-num-_-', '2') + '">Next</li>';
                    } else {
                        nextblock = nextBtn.replace('-_-num-_-', '2');
                        nextblock = nextBtn.replace('-_-class-_-', '');
                    }
                } else {
                    if (blockplus <= totalPage) {
                        nextview = blockplus;
                    } else {
                        nextview = totalPage;
                    }

                    if (nextBtn == false) {
                        nextblock = '<li onclick="' + link.replace('-_-num-_-', nextview) + '">Next</li>';
                    } else {
                        nextblock = nextBtn.replace('-_-num-_-', nextview);
                        nextblock = nextBtn.replace('-_-class-_-', '');
                    }
                }

                startpage = 1;
                loopsize = (totalPage >= blockSize) ? blockSize : totalPage;

            } else if (thisPage == totalPage) {

                if (block == false) {
                    if (prevBtn == false) {
                        fastblock = '<li onclick="' + link.replace('-_-num-_-', thisPage - 1) + '">Fast</li>';
                    } else {
                        fastblock = prevBtn.replace('-_-num-_-', thisPage - 1);
                        fastblock = prevBtn.replace('-_-class-_-', '');
                    }
                } else {
                    if (blockminus > 1) {
                        fastview = blockminus;
                    } else {
                        fastview = 1;
                    }

                    if (prevBtn == false) {
                        fastblock = '<li onclick="' + link.replace('-_-num-_-', fastview) + '">Fast</li>';
                    } else {
                        fastblock = prevBtn.replace('-_-num-_-', fastview);
                        fastblock = prevBtn.replace('-_-class-_-', '');
                    }
                }

                startpage = ((totalPage + 1 - blockSize) <= 1) ? 1 : (totalPage + 1 - blockSize);
                loopsize = totalPage;

            } else {

                if (block == false) {
                    if (prevBtn == false) {
                        fastblock = '<li onclick="' + link.replace('-_-num-_-', thisPage - 1) + '">Fast</li>';
                    } else {
                        fastblock = prevBtn.replace('-_-num-_-', thisPage - 1);
                        fastblock = prevBtn.replace('-_-class-_-', '');
                    }

                    if (nextBtn == false) {
                        nextblock = '<li onclick="' + link.replace('-_-num-_-', thisPage + 1) + '">Next</li>';
                    } else {
                        nextblock = nextBtn.replace('-_-num-_-', thisPage + 1);
                        nextblock = nextBtn.replace('-_-class-_-', '');
                    }
                } else {
                    if (blockminus > 1) {
                        fastview = blockminus;
                    } else {
                        fastview = 1;
                    }

                    if (prevBtn == false) {
                        fastblock = '<li onclick="' + link.replace('-_-num-_-', fastview) + '">Fast</li>';
                    } else {
                        fastblock = prevBtn.replace('-_-num-_-', fastview);
                        fastblock = prevBtn.replace('-_-class-_-', '');
                    }

                    if (blockplus <= totalPage) {
                        nextview = blockplus;
                    } else {
                        nextview = totalPage;
                    }

                    if (nextBtn == false) {
                        nextblock = '<li onclick="' + link.replace('-_-num-_-', nextview) + '">Next</li>';
                    } else {
                        nextblock = nextBtn.replace('-_-num-_-', nextview);
                        nextblock = nextBtn.replace('-_-class-_-', '');
                    }
                }

                startpage = (((Number(thisPage) - Number(blockSize)) + 1) <= 1) ? 1 : ((Number(thisPage) - Number(blockSize)) + 1);
                loopsize = startpage + blockSize - 1;

            }

            for (var i = startpage; i <= loopsize; i++) {

                var button = '';

                if (thisPage == i) {
                    if (numBtn == false) {                        
                        button = '<li class="Pdisabled">' + i + '</li>';
                        numblock = numblock + button;
                    } else {
                        button = numBtn.replace("-_-num-_-", i);
                        button = button.replace('-_-class-_-', 'Pdisabled');
                        numblock = numblock + button;
                    }
                } else {                    
                    if (numBtn == false) {
                        button = '<li onclick="' + link.replace('-_-num-_-', i) + '">' + i + '</li>';
                        numblock = numblock + button;
                    } else {
                        button = numBtn.replace("-_-num-_-", i);
                        button = button.replace('-_-class-_-', '');
                        numblock = numblock + button;
                    }
                }
            }

            pagination = firstBtn + fastblock + numblock + nextblock + endBtn;

            return pagination;

        } else {
            if (minShow == false) {
                return '';
            } else {
                if (numBtn != false) {
                    pagination = numBtn.replace('-_-num-_-', '1');
                    pagination = numBtn.replace('-_-class-_-', 'Pdisabled');
                    return pagination;
                } else {
                    return '<li>1</li>';
                }
            }
        }
    }
}
