import * as Sentry from '@sentry/react-router';
//  profiling
import { nodeProfilingIntegration } from '@sentry/profiling-node';
//  profiling
Sentry.init({
  dsn: 'https://deabfc478859aef730f8862e41185188@o4510001996627968.ingest.us.sentry.io/4510002001346560',
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  //  logs
  // Enable logs to be sent to Sentry
  enableLogs: true,
  //  logs
  //  profiling
  integrations: [nodeProfilingIntegration()],
  //  profiling
  //  performance
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  //  performance
  //  profiling
  profilesSampleRate: 1.0, // profile every transaction
  //  profiling
});
