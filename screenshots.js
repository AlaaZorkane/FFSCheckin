const colors = require('colors');
const screenshots_folder = 'screenshots'

module.exports = {
    take: async (page, name, toggle, logger, desc) => {
        if(toggle) {
            logger.verbose(`Taking a screenshot of ${(desc ? desc : name).green}`);
            await page.screenshot({path: `${screenshots_folder}/${name}_shot.png`});
        }
    },
    getlist: () => {}
}