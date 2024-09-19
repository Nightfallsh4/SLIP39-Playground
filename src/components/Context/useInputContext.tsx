import slip39  from "slip39";

export default function useInputContext() {
	function onSubmitSecret(data: string) {
        console.log("On Clicked");
        
		const threshold = 2
		
		const passphrase = "TREZOR"
        const masterSecret = slip39.slip39EncodeHex(data)
		/**
		 * 4 groups shares.
		 * = two for Alice
		 * = one for friends and
		 * = one for family members
		 * Two of these group shares are required to reconstruct the master secret.
		 */
		const groups = [
			// Alice group shares. 1 is enough to reconstruct a group share,
			// therefore she needs at least two group shares to be reconstructed,
			[1, 1],
			[1, 1],
			// 3 of 5 Friends' shares are required to reconstruct this group share
			[1, 1],
			// 2 of 6 Family's shares are required to reconstruct this group share
			[1, 1],
		]

        const slip = slip39.fromArray(masterSecret, {
            passphrase: passphrase,
            threshold: threshold,
            groups: groups,
          });

        console.log(slip);
        
	}

	return onSubmitSecret
}
