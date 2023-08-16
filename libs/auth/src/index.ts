export * from './lib/auth.module';
export * from './lib/containers/login/login.component';
export { AuthService } from './lib/services/auth/auth.service';
export { AuthGuard } from './lib/guards/auth.guard';

// ///
// // As every library, it also has a barrel index.ts (sometimes also called public-api.ts) serving as the entry point. It exports everything consumers can use:
// Please note that index.ts is also exporting the two components although they are already registered with the also exported AuthLibModule. In the scenario discussed here, this is vital in order to make sure it’s detected and compiled by Ivy.