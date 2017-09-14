var methods = module.exports = {
    paging: function(totalCount, thisPage, blockSize, pageSize, minShow=false, block=false, firstEnd=false, showFast=false, fastPrev=false, fastNext=false, numBtn=false, prevBtn=false, nextBtn=false, firstBtn=false, endBtn=false)
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
        var totalBlock;

        if ((totalCount % pageSize) > 0) {
            totalPage = Math.floor(totalCount / pageSize) + 1;
        } else {
            totalPage = Math.floor(totalCount / pageSize);
        }

        if ((totalCount % blockSize) > 0) {
            totalBlock = Math.floor(totalCount / blockSize) + 1;
        } else {
            totalBlock = Math.floor(totalCount / blockSize) + 1;
        }
        
        if (firstEnd != false) {
            if (firstBtn == false) {
                firstBtn = '<li><a href="1">First</li>';
            }
            if (endBtn == false) {
                endBtn = '<li><a href="' + totalPage + '">First</li>';
            }
        } else {
            firstBtn = '';
            endBtn = '';
        }
        
        if (totalPage > 1) {
            var numbering;
            if (thisPage == 1) {
                /*
                for (var i = 1; i <= blockSize; i++) {
                    if (thisPage == i) {

                    } else {

                    }
                }
                */
            } else if (thisPage == totalPage) {

            } else {

            }

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
