import figlet from 'figlet';
import chalk from 'chalk';

import log4js from './logger';

import * as cli from './cli';
import * as jwt from './jwt';

var logger = new log4js.getLogger();

async function main () {
    console.log(
        chalk.yellow(
            figlet.textSync('JWT Generator', { horizontalLayout: 'full' })
        )
    );

    try {
        let jwtData = await cli.requestJwtData();

        if (jwtData) {
            let token = jwt.encodeJwt(jwtData.userId, jwtData.expirationDate, jwtData.encryptionKey);
            logger.info(`Generated token:\n\n${token}\n\n`);
        } else {
            throw new Error('There was an error generating the JWT.');
        }
    } catch (error) {
        logger.error(error.message);
    }
};

main ();