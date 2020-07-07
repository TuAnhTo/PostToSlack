import fetch from 'node-fetch';
/**
 * gửi 1 thông báo lên slack
 * @param {object} data
 * @example postToSlack({channel:'@error_report',text:'....'})
 */
export async function postToSlack(error_log) {
    const postToSlack = {
        "text": 'Report :    ' + error_log
    };
    const url = 'https://hooks.slack.com/services/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';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(postToSlack)
    });
}
export default postToSlack;
