// Routes

/**
 * LOGIN
 *
 *  POST -   login   - /
 *  POST -  signup  - /signup
 *
 *
 * FETCH DATA
 *
 * GET  conversations - /conversations
 *      Gets the conversation history log
 *
 *
 * GET  conversation - /conversations/:id
 *      Gets the conversation by id:string
 *
 * POST conversations - /conversations/:id
 *      Posts the conversation tohe conversation log.
 *      This also will be used on every message that is being created
 *      in a conversation. So if there's no stored conversation with a specific ID a new conversation
 *      will be generated from the backend and will save the message to the newly object in the conversation array
 *
 */
