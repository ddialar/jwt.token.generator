import inquirer from 'inquirer';
import moment from 'moment';

async function requestJwtData () {
    let questions = [
        {
            name: 'userId',
            type: 'input',
            message: 'Define the User ID (e.g.: 1, ddialar, etc.):',
            validate: (value) => {
                return (value) ? true : 'Please, enter a valid User ID (e.g.: 1, ddialar, etc.).';
            }
        },
        {
            name: 'expirationDate',
            type: 'input',
            message: 'Define the expiration period with amount and unit (e.g.: 2 years):',
            validate: (value) => {
                let validUnits = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];
                try {
                    if (value && validUnits.indexOf(value.split(' ')[1]) >= 0) {
                        return true;
                    } else {
                        throw new Error();
                    }
                } catch (error) {
                    return 'Please, verify your input. The allowed units are seconds, minutes, hours, days, weeks, months and years.';
                }
            }
        },
        {
            name: 'userRole',
            type: 'input',
            message: 'Define the user role (e.g.: 0, admin, etc.):',
            validate: (value) => {
                try {
                    if (value) {
                        return true;
                    } else {
                        throw new Error();
                    }
                } catch (error) {
                    return 'Please, verify your input. The Role field cannot be an empty string.';
                }
            }
        },
        {
            name: 'encryptionKey',
            type: 'input',
            message: 'Define the encryption key:',
            validate: (value) => {
                try {
                    if (value) {
                        return true;
                    } else {
                        throw new Error();
                    }
                } catch (error) {
                    return 'Please, verify your input. The encryption key cannot be empty.';
                }
            }
        }
    ];

    return await inquirer.prompt(questions);
};

export {
    requestJwtData
};