import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

export class UIService {
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar) {}

    snowSnackbar(message, action, duration) {
        this.snackbar.open(message, action, {
            duration
        });
    }
}
