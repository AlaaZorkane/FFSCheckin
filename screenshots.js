const colors = require('colors');
const screenshots_folder = 'screenshots'

module.exports = {
    take: async (page, name, desc) => {
        console.log(`[+] Taking a screenshot of ${desc ? desc : name}`.green);
        await page.screenshot({path: `${screenshots_folder}/${name}_shot.png`});
    },
    getlist: () => {}
}