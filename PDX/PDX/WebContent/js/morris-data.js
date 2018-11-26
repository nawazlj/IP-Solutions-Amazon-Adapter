$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Amazon: 2666,
            Flipkart: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            Amazon: 2778,
            Flipkart: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            Amazon: 4912,
            Flipkart: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            Amazon: 3767,
            Flipkart: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            Amazon: 6810,
            Flipkart: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            Amazon: 5670,
            Flipkart: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            Amazon: 4820,
            Flipkart: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            Amazon: 15073,
            Flipkart: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            Amazon: 10687,
            Flipkart: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            Amazon: 8432,
            Flipkart: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['Amazon', 'Flipkart', 'Wallmart'],
        labels: ['Amazon', 'Flipkart', 'Wallmart'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Amazon",
            value: 12000
        }, {
            label: "Flipkart",
            value: 30000
        }, {
            label: "Wallmart",
            value: 20000
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
