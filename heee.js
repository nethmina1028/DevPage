const { exec } = require('child_process');

function getWifiPasswords() {
    exec('netsh wlan show profiles', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err}`);
            return;
        }

               const profileNames = stdout.split('\n')
            .filter(line => line.includes("All User Profile"))
            .map(line => line.split(":")[1].trim());

        profileNames.forEach(profile => {
                       exec(`netsh wlan show profile "${profile}" key=clear`, (err, profileInfo, stderr) => {
                if (err) {
                    console.error(`Error retrieving details for profile ${profile}: ${err}`);
                    return;
                }

                              const passwordLine = profileInfo.split('\n').find(line => line.includes("Key Content"));
                const password = passwordLine ? passwordLine.split(":")[1].trim() : "No password found";
                
                console.log(`Profile: ${profile}, Password: ${password}`);
            });
        });
    });
}

getWifiPasswords();
