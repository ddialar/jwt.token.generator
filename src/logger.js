import log4js from 'log4js';

var loggerConfiguration = {
    appenders: {
        console: { 
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '[%r] [%[%5.5p%]] - %m%'
            }
        }
    },
    categories: {
        default: { 
            appenders: ['console'], 
            level: 'all'
        }
    }
};

log4js.configure(loggerConfiguration);

export default log4js;