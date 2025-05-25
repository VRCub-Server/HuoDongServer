module.exports = {

"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/lib/default-data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/default-data.ts
__turbopack_context__.s({
    "defaultAnnouncements": (()=>defaultAnnouncements),
    "defaultEvents": (()=>defaultEvents),
    "defaultUsers": (()=>defaultUsers)
});
const defaultUsers = [
    {
        id: 'Steve',
        username: 'Steve',
        avatarUrl: `https://placehold.co/100x100.png?text=St`,
        op: 0,
        password: '123456'
    },
    {
        id: 'Alex',
        username: 'Alex',
        avatarUrl: `https://placehold.co/100x100.png?text=Al`,
        op: 0,
        password: '123456'
    },
    {
        id: 'Notch',
        username: 'Notch',
        avatarUrl: `https://placehold.co/100x100.png?text=No`,
        op: 1,
        password: '123456'
    },
    {
        id: 'dream_pep_id',
        username: 'dream_pep',
        avatarUrl: `https://placehold.co/100x100.png?text=dr`,
        op: 1,
        password: '123456'
    }
];
const defaultEvents = [
    {
        id: 'event1',
        name: '生存游戏锦标赛',
        date: '2024-07-29T12:00:00.000Z',
        description: "\n### 欢迎参加年度生存游戏！\n证明你的勇气，成为最后的幸存者。\n**规则：**\n- 禁止作弊\n- 联盟是暂时的\n- 玩得开心！\n**奖品：**\n- 第一名：钻石奖杯\n- 第二名：金锭\n- 第三名：铁制工具\n",
        participantLimit: 24,
        participants: [
            {
                id: 'Steve',
                username: 'Steve',
                avatarUrl: `https://placehold.co/100x100.png?text=St`,
                isCheckedIn: false,
                op: 0,
                password: '123456'
            },
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: `https://placehold.co/100x100.png?text=dr`,
                isCheckedIn: false,
                op: 1,
                password: '123456'
            }
        ],
        cdKey: 'SURVIVAL2024',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event2',
        name: '创意建筑大赛',
        date: '2024-07-22T12:00:00.000Z',
        description: "\n## 展示你的建筑技巧！\n主题：**中世纪城堡**\n在时限内建造最令人印象深刻的城堡。\n评分标准：\n- 创意\n- 细节\n- 规模\n",
        participantLimit: 50,
        participants: [
            {
                id: 'Steve',
                username: 'Steve',
                avatarUrl: `https://placehold.co/100x100.png?text=St`,
                isCheckedIn: true,
                op: 0,
                password: '123456'
            },
            {
                id: 'Alex',
                username: 'Alex',
                avatarUrl: `https://placehold.co/100x100.png?text=Al`,
                isCheckedIn: false,
                op: 0,
                password: '123456'
            }
        ],
        cdKey: 'BUILDMC2024',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event3',
        name: '跑酷挑战赛',
        date: '2024-07-08T12:00:00.000Z',
        description: '在我们迄今为止最难的跑酷地图中测试你的敏捷性。完成即可获得奖励！',
        participants: [
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: `https://placehold.co/100x100.png?text=dr`,
                isCheckedIn: true,
                op: 1,
                password: '123456'
            }
        ],
        cdKey: 'PARKOURX',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event4',
        name: '红石装置展览会',
        date: '2024-08-21T12:00:00.000Z',
        description: '展示你最巧妙的红石发明。创新是关键！',
        participantLimit: 10,
        participants: [],
        cdKey: 'REDSTONEFAI',
        imageUrl: `https://placehold.co/800x400.png`,
        organizerId: 'Notch'
    },
    {
        id: 'event_1747228478227_2n7f2',
        name: '测试活动',
        date: '2025-05-16T21:14',
        description: '这是个测试活动将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通将菜单改为侧边栏与仪表盘的数据面盘打通',
        participantLimit: 50,
        cdKey: 'Beta1',
        imageUrl: '',
        participants: [
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: 'https://placehold.co/100x100.png?text=dr',
                isCheckedIn: false,
                op: 1,
                password: "123456"
            }
        ],
        organizerId: 'dream_pep_id'
    }
];
const defaultAnnouncements = [
    {
        id: 'announce1',
        title: '欢迎来到 MineVent!',
        content: '发现、加入并创建精彩的《我的世界》活动。祝您玩得愉快！',
        date: new Date().toISOString()
    },
    {
        id: 'announce2',
        title: '新功能：仪表盘公告',
        content: '现在您可以在仪表盘查阅最新公告了。',
        date: new Date(Date.now() - 86400000).toISOString()
    }
];
}}),
"[project]/src/lib/db.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/default-data.ts [app-rsc] (ecmascript)"); // We'll move defaults here
;
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'minevent.sqlite');
// Ensure data directory exists
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_DIR)) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(DATA_DIR, {
        recursive: true
    });
}
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"](DB_PATH);
db.pragma('journal_mode = WAL'); // Recommended for better performance and concurrency
db.pragma('foreign_keys = ON'); // Enforce foreign key constraints
function initializeDatabase() {
    console.log('Initializing database schema...');
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      avatarUrl TEXT,
      op INTEGER DEFAULT 0,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      participantLimit INTEGER,
      cdKey TEXT NOT NULL UNIQUE,
      imageUrl TEXT,
      organizerId TEXT NOT NULL,
      FOREIGN KEY (organizerId) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS announcements (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS event_participants (
      eventId TEXT NOT NULL,
      userId TEXT NOT NULL,
      isCheckedIn INTEGER DEFAULT 0,
      PRIMARY KEY (eventId, userId),
      FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
    console.log('Schema initialized.');
    // Seed data if tables are empty
    const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get();
    if (userCount.count === 0) {
        console.log('Seeding users table...');
        const insertUser = db.prepare('INSERT INTO users (id, username, avatarUrl, op, password) VALUES (@id, @username, @avatarUrl, @op, @password)');
        db.transaction(()=>{
            for (const user of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUsers"]){
                insertUser.run({
                    id: user.id,
                    username: user.username,
                    avatarUrl: user.avatarUrl || `https://placehold.co/100x100.png?text=${user.username.substring(0, 2)}`,
                    op: user.op || 0,
                    password: user.password || '123456' // Default password if not provided
                });
            }
        })();
        console.log('Users table seeded.');
    }
    const eventCount = db.prepare('SELECT COUNT(*) as count FROM events').get();
    if (eventCount.count === 0) {
        console.log('Seeding events and event_participants tables...');
        const insertEvent = db.prepare('INSERT INTO events (id, name, date, description, participantLimit, cdKey, imageUrl, organizerId) VALUES (@id, @name, @date, @description, @participantLimit, @cdKey, @imageUrl, @organizerId)');
        const insertParticipant = db.prepare('INSERT INTO event_participants (eventId, userId, isCheckedIn) VALUES (@eventId, @userId, @isCheckedIn)');
        db.transaction(()=>{
            for (const event of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultEvents"]){
                insertEvent.run({
                    id: event.id,
                    name: event.name,
                    date: event.date,
                    description: event.description,
                    participantLimit: event.participantLimit,
                    cdKey: event.cdKey,
                    imageUrl: event.imageUrl,
                    organizerId: event.organizerId
                });
                for (const p of event.participants){
                    // Ensure participant user exists in users table before inserting (or handle as error)
                    const userExists = db.prepare('SELECT id FROM users WHERE id = ?').get(p.id);
                    if (userExists) {
                        insertParticipant.run({
                            eventId: event.id,
                            userId: p.id,
                            isCheckedIn: p.isCheckedIn ? 1 : 0
                        });
                    } else {
                        console.warn(`Skipping participant ${p.id} for event ${event.id} as user does not exist.`);
                    }
                }
            }
        })();
        console.log('Events and event_participants tables seeded.');
    }
    const announcementCount = db.prepare('SELECT COUNT(*) as count FROM announcements').get();
    if (announcementCount.count === 0) {
        console.log('Seeding announcements table...');
        const insertAnnouncement = db.prepare('INSERT INTO announcements (id, title, content, date) VALUES (@id, @title, @content, @date)');
        db.transaction(()=>{
            for (const announcement of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAnnouncements"]){
                insertAnnouncement.run(announcement);
            }
        })();
        console.log('Announcements table seeded.');
    }
}
// Call initialization
try {
    initializeDatabase();
} catch (err) {
    console.error("CRITICAL: Database initialization failed:", err);
// Depending on the error, you might want to exit or have a fallback
}
const __TURBOPACK__default__export__ = db;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkInUser": (()=>checkInUser),
    "createEvent": (()=>createEvent),
    "createUser": (()=>createUser),
    "deleteEventById": (()=>deleteEventById),
    "deleteUserById": (()=>deleteUserById),
    "getAnnouncements": (()=>getAnnouncements),
    "getEventByCdKey": (()=>getEventByCdKey),
    "getEventById": (()=>getEventById),
    "getEvents": (()=>getEvents),
    "getEventsForUser": (()=>getEventsForUser),
    "getUserById": (()=>getUserById),
    "getUserByUsername": (()=>getUserByUsername),
    "getUsers": (()=>getUsers),
    "joinEvent": (()=>joinEvent),
    "leaveEvent": (()=>leaveEvent),
    "updateEventById": (()=>updateEventById),
    "updateUserById": (()=>updateUserById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)"); // Import the initialized DB instance
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
;
;
async function getUsers() {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password FROM users');
    return stmt.all();
}
async function getUserById(userId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password FROM users WHERE id = ?');
    return stmt.get(userId);
}
async function getUserByUsername(username) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password FROM users WHERE lower(username) = lower(?)');
    return stmt.get(username);
}
async function createUser(userData) {
    const existingUser = await getUserByUsername(userData.username);
    if (existingUser) {
        console.warn(`Attempting to create an already existing user: ${userData.username} (ID: ${userData.id}). Returning existing user.`);
        return existingUser;
    }
    const newUser = {
        id: userData.id || userData.username,
        username: userData.username,
        avatarUrl: userData.avatarUrl || `https://placehold.co/100x100.png?text=${userData.username.substring(0, 2).toUpperCase()}`,
        op: userData.op || 0,
        password: userData.password
    };
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO users (id, username, avatarUrl, op, password) VALUES (@id, @username, @avatarUrl, @op, @password)');
    try {
        stmt.run(newUser);
        return newUser;
    } catch (error) {
        console.error(`Failed to create user ${userData.username}:`, error);
        // Re-throw or handle more gracefully depending on desired app behavior
        throw new Error(`Failed to create user ${userData.username}: ${error.message}`);
    }
}
async function updateUserById(userId, userData) {
    const currentUser = await getUserById(userId);
    if (!currentUser) return null;
    const fieldsToUpdate = {};
    if (userData.username !== undefined) fieldsToUpdate.username = userData.username;
    if (userData.avatarUrl !== undefined) fieldsToUpdate.avatarUrl = userData.avatarUrl;
    if (userData.op !== undefined) fieldsToUpdate.op = userData.op;
    if (userData.password !== undefined && userData.password !== '') fieldsToUpdate.password = userData.password; // Update password only if provided and not empty
    if (Object.keys(fieldsToUpdate).length === 0) {
        return currentUser; // No actual changes to make
    }
    const setClauses = Object.keys(fieldsToUpdate).map((key)=>`${key} = @${key}`).join(', ');
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`UPDATE users SET ${setClauses} WHERE id = @id`);
    const result = stmt.run({
        ...fieldsToUpdate,
        id: userId
    });
    if (result.changes === 0) return null; // Should not happen if user exists and there are fields to update
    return getUserById(userId); // Fetch and return updated user
}
async function deleteUserById(userId) {
    // Check if the user is an organizer of any event
    const eventOrganizerCheckStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT COUNT(*) as count FROM events WHERE organizerId = ?');
    const organizerCount = eventOrganizerCheckStmt.get(userId);
    if (organizerCount.count > 0) {
        return {
            success: false,
            message: `无法删除用户 ${userId}，因为他们是 ${organizerCount.count} 个活动的组织者。请先转移或删除这些活动。`
        };
    }
    const deleteUserStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM users WHERE id = ?');
    const result = deleteUserStmt.run(userId);
    // CASCADE delete on event_participants table will handle removing their participation records.
    if (result.changes > 0) {
        return {
            success: true,
            message: `用户 ${userId} 已成功删除。`
        };
    }
    return {
        success: false,
        message: `用户 ${userId} 未找到，无法删除。`
    };
}
// --- Event Functions ---
async function getEventParticipants(eventId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`
    SELECT u.id, u.username, u.avatarUrl, u.op, ep.isCheckedIn
    FROM users u
    JOIN event_participants ep ON u.id = ep.userId
    WHERE ep.eventId = ?
  `);
    // Note: We don't select u.password here for participants list
    const participantsData = stmt.all(eventId);
    return participantsData.map((p)=>({
            ...p,
            isCheckedIn: !!p.isCheckedIn
        }));
}
async function getEvents() {
    const eventsStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM events');
    const rawEvents = eventsStmt.all();
    const events = [];
    for (const rawEvent of rawEvents){
        const participants = await getEventParticipants(rawEvent.id);
        events.push({
            ...rawEvent,
            participants
        });
    }
    return events;
}
async function getEventById(id) {
    const eventStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM events WHERE id = ?');
    const rawEvent = eventStmt.get(id);
    if (!rawEvent) return undefined;
    const participants = await getEventParticipants(rawEvent.id);
    return {
        ...rawEvent,
        participants
    };
}
async function getEventsForUser(userId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`
    SELECT e.*
    FROM events e
    JOIN event_participants ep ON e.id = ep.eventId
    WHERE ep.userId = ?
  `);
    const rawEvents = stmt.all(userId);
    const joinedEvents = [];
    for (const rawEvent of rawEvents){
        // For each event the user joined, we still need to fetch its full participant list
        // to display on event cards or detail pages.
        const participants = await getEventParticipants(rawEvent.id);
        joinedEvents.push({
            ...rawEvent,
            participants
        });
    }
    return joinedEvents;
}
async function getEventByCdKey(cdKey) {
    const eventStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM events WHERE lower(cdKey) = lower(?)');
    const rawEvent = eventStmt.get(cdKey);
    if (!rawEvent) return undefined;
    const participants = await getEventParticipants(rawEvent.id);
    return {
        ...rawEvent,
        participants
    };
}
async function createEvent(eventData, organizerId) {
    const newEventId = `event_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const participantLimit = typeof eventData.participantLimit === 'number' && !isNaN(eventData.participantLimit) ? eventData.participantLimit : null;
    const newEventRow = {
        id: newEventId,
        name: eventData.name,
        date: eventData.date,
        description: eventData.description,
        participantLimit: participantLimit,
        cdKey: eventData.cdKey,
        imageUrl: eventData.imageUrl || '',
        organizerId
    };
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO events (id, name, date, description, participantLimit, cdKey, imageUrl, organizerId) VALUES (@id, @name, @date, @description, @participantLimit, @cdKey, @imageUrl, @organizerId)');
    stmt.run(newEventRow);
    return {
        ...newEventRow,
        participants: []
    }; // Return with empty participants as they are managed separately
}
async function updateEventById(eventId, eventData) {
    const { name, date, description, participantLimit, cdKey, imageUrl } = eventData;
    const actualParticipantLimit = typeof participantLimit === 'number' && !isNaN(participantLimit) ? participantLimit : participantLimit === null ? null : undefined;
    const fieldsToUpdate = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (date !== undefined) fieldsToUpdate.date = date;
    if (description !== undefined) fieldsToUpdate.description = description;
    if (actualParticipantLimit !== undefined) fieldsToUpdate.participantLimit = actualParticipantLimit; // Can be null
    if (cdKey !== undefined) fieldsToUpdate.cdKey = cdKey;
    if (imageUrl !== undefined) fieldsToUpdate.imageUrl = imageUrl;
    if (Object.keys(fieldsToUpdate).length === 0) {
        return getEventById(eventId) || null; // No actual changes
    }
    const setClauses = Object.keys(fieldsToUpdate).map((key)=>`${key} = @${key}`).join(', ');
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`UPDATE events SET ${setClauses} WHERE id = @eventId`);
    const result = stmt.run({
        ...fieldsToUpdate,
        eventId
    });
    if (result.changes === 0) return null;
    return getEventById(eventId) || null;
}
async function deleteEventById(eventId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM events WHERE id = ?');
    const result = stmt.run(eventId);
    if (result.changes > 0) {
        return {
            success: true,
            message: "活动已成功删除。"
        };
    }
    return {
        success: false,
        message: "活动未找到，无法删除。"
    };
}
async function joinEvent(userId, eventId, cdKeyInput) {
    const event = await getEventById(eventId);
    if (!event) return {
        success: false,
        message: '活动未找到。'
    };
    const user = await getUserById(userId);
    if (!user) return {
        success: false,
        message: '用户未找到。'
    };
    if (event.cdKey.toLowerCase() !== cdKeyInput.toLowerCase()) return {
        success: false,
        message: '无效的活动代码。'
    };
    const currentParticipants = await getEventParticipants(eventId);
    if (event.participantLimit && currentParticipants.length >= event.participantLimit) {
        return {
            success: false,
            message: '活动人数已满。'
        };
    }
    if (currentParticipants.some((p)=>p.id === userId)) {
        // If user is already a participant, just return success and current event state
        return {
            success: true,
            message: '您已加入此活动。',
            event
        };
    }
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO event_participants (eventId, userId, isCheckedIn) VALUES (?, ?, 0)');
    stmt.run(eventId, userId);
    const finalEvent = await getEventById(eventId); // Re-fetch to get updated participant list
    return {
        success: true,
        message: '成功加入活动！',
        event: finalEvent
    };
}
async function leaveEvent(userId, eventId) {
    const event = await getEventById(eventId);
    if (!event) return {
        success: false,
        message: '活动未找到。'
    };
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM event_participants WHERE eventId = ? AND userId = ?');
    const result = stmt.run(eventId, userId);
    if (result.changes > 0) {
        const updatedEvent = await getEventById(eventId);
        return {
            success: true,
            message: '成功离开活动。',
            event: updatedEvent
        };
    }
    return {
        success: false,
        message: '您当前未加入此活动，或离开失败。'
    };
}
async function checkInUser(userId, eventId) {
    const event = await getEventById(eventId);
    if (!event) return {
        success: false,
        message: '活动未找到。'
    };
    const participants = await getEventParticipants(eventId);
    const participant = participants.find((p)=>p.id === userId);
    if (!participant) return {
        success: false,
        message: '您未报名参加此活动。'
    };
    if (participant.isCheckedIn) return {
        success: true,
        message: '您已签到。'
    };
    // Check if the event is currently happening (same day)
    const eventDateObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.date);
    const today = new Date();
    // Compare year, month, and day only for "current" status
    const isCurrent = eventDateObj.getFullYear() === today.getFullYear() && eventDateObj.getMonth() === today.getMonth() && eventDateObj.getDate() === today.getDate();
    if (!isCurrent) {
        return {
            success: false,
            message: '此活动的签到尚未开始或已结束。'
        };
    }
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('UPDATE event_participants SET isCheckedIn = 1 WHERE eventId = ? AND userId = ?');
    stmt.run(eventId, userId);
    return {
        success: true,
        message: '签到成功！'
    };
}
async function getAnnouncements() {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT * FROM announcements ORDER BY date DESC');
    return stmt.all();
}
}}),
"[project]/src/lib/namemc.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"4081e2ef30dd72639bf9d57d98edfb2e2fc14252a0":"checkNameMC"} */ __turbopack_context__.s({
    "checkNameMC": (()=>checkNameMC)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkNameMC(username) {
    console.log(`Pretending to check NameMC for username: ${username}`);
    // In a real scenario:
    // try {
    //   // Example: const response = await fetch(`https://api.namemc.com/profile/${username}/uuid`);
    //   // return response.ok;
    // } catch (error) {
    //   console.error("NameMC check failed:", error);
    //   return false;
    // }
    // For testing the "invalid" path in the login flow
    if (username.toLowerCase() === "invalid_player_for_testing") {
        console.log(`Mock: Username "${username}" is considered invalid by NameMC.`);
        return false;
    }
    // Mock: assume most usernames are valid for now
    console.log(`Mock: Username "${username}" is considered valid by NameMC.`);
    return true;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    checkNameMC
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkNameMC, "4081e2ef30dd72639bf9d57d98edfb2e2fc14252a0", null);
}}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"000a3c0459b110a23277041375a40884fd7894f8af":"getSessionUser","002dca974b2b2dbfb79c18855941474a44960be452":"logout","0064db2e7dd8e556db8a0d045612a968c3e23e9100":"getUsersAction","00a2cba85f720f47947bfd867820e76e5eb45548b1":"getEventsAction","00e40d1753d2794c1a1b8ac004bf987b29297ef20f":"getAnnouncementsAction","40025ab292c69b6d0d92536eed959d4b0a09b21e4a":"getUserProfile","40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa":"checkInAction","408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115":"getEventDetailsAction","40c9e4d36476a8eadf64425c058d41fa958826253d":"leaveEventAction","40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b":"joinEventUsingCdKeyOnlyAction","600d96d8a257cd66bdea1261d22e70a359d4c7105b":"createEventAction","600ff814380961b1677e537ea3efea0cdc5011f63e":"authenticateUserAction","6023e1049b3e36a74763e714f6ef74d0fd819e276d":"adminAddUserAction","6037c7960096ccccc14cc1b320b52c21347f2a3cd1":"updateEventAction","605ef4341912dfc23a183c3011686b56b9850db6ef":"adminDeleteUserAction","608149bf6df1965e95adec1596e570c4d6d6f236d1":"adminUpdateUserAction","60afbb9bb41755531d36134ffd78b9f4726ef1b247":"deleteEventAction","60d2ba7ffe693511748e8889b5aa0f9b79c91ea589":"joinEventAction"} */ __turbopack_context__.s({
    "adminAddUserAction": (()=>adminAddUserAction),
    "adminDeleteUserAction": (()=>adminDeleteUserAction),
    "adminUpdateUserAction": (()=>adminUpdateUserAction),
    "authenticateUserAction": (()=>authenticateUserAction),
    "checkInAction": (()=>checkInAction),
    "createEventAction": (()=>createEventAction),
    "deleteEventAction": (()=>deleteEventAction),
    "getAnnouncementsAction": (()=>getAnnouncementsAction),
    "getEventDetailsAction": (()=>getEventDetailsAction),
    "getEventsAction": (()=>getEventsAction),
    "getSessionUser": (()=>getSessionUser),
    "getUserProfile": (()=>getUserProfile),
    "getUsersAction": (()=>getUsersAction),
    "joinEventAction": (()=>joinEventAction),
    "joinEventUsingCdKeyOnlyAction": (()=>joinEventUsingCdKeyOnlyAction),
    "leaveEventAction": (()=>leaveEventAction),
    "logout": (()=>logout),
    "updateEventAction": (()=>updateEventAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/namemc.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days
// --- Geetest Verification ---
async function verifyGeetestV4(lot_number, captcha_output, pass_token, gen_time) {
    const captchaId = ("TURBOPACK compile-time value", "7087c8f06d892afd4d6e4334362d218b");
    const captchaKey = process.env.GEETEST_SECRET_KEY;
    if (!captchaId || !captchaKey) {
        console.warn("Geetest CAPTCHA_ID or SECRET_KEY not configured. Skipping validation in dev/test mode.");
        return ("TURBOPACK compile-time value", "development") !== 'production';
    }
    if (!lot_number || !captcha_output || !pass_token || !gen_time) {
        console.warn("Geetest client parameters missing for server validation.");
        return false;
    }
    console.log("Server-side Geetest validation: INITIATED");
    console.log("Received Geetest params:", {
        lot_number,
        captcha_output,
        pass_token,
        gen_time,
        captchaIdUsed: captchaId
    });
    const params = new URLSearchParams();
    params.append('lot_number', lot_number);
    params.append('captcha_output', captcha_output);
    params.append('pass_token', pass_token);
    params.append('gen_time', gen_time);
    params.append('captcha_id', captchaId);
    const sign_token = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', captchaKey).update(lot_number).digest('hex');
    params.append('sign_token', sign_token);
    try {
        const response = await fetch('https://gcaptcha4.geetest.com/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        });
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Geetest API request failed with status: ${response.status}. Body: ${errorBody}`);
            return false;
        }
        const data = await response.json();
        console.log("Geetest validation API response:", data);
        if (data?.status === 'success' && data?.result === 'success') {
            console.log("Server-side Geetest validation: SUCCESS");
            return true;
        } else {
            console.warn("Server-side Geetest validation: FAILED. Response data:", data);
            return false;
        }
    } catch (error) {
        console.error('Geetest validation API request failed:', error);
        return false;
    }
}
// --- Authentication ---
const MinecraftUsernameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").max(16, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").regex(/^[a-zA-Z0-9_]+$/, "Minecraft 用户名只能包含字母、数字和下划线。").refine((username)=>!username.startsWith('_') && !username.endsWith('_'), {
    message: "Minecraft 用户名不能以下划线开头或结尾。"
});
const AuthFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    minecraftUsername: MinecraftUsernameSchema,
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(6, "密码至少需要6个字符。"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'login',
        'register'
    ]),
    lot_number: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    captcha_output: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    pass_token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
    gen_time: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
}).refine((data)=>{
    if (data.authMode === 'register') {
        return data.password === data.confirmPassword;
    }
    return true;
}, {
    message: "两次输入的密码不匹配。",
    path: [
        "confirmPassword"
    ]
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ authenticateUserAction(prevState, formData) {
    console.log("authenticateUserAction: Received formData entries:");
    for (const [key, value] of formData.entries()){
        console.log(`  ${key}: ${value}`);
    }
    try {
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = AuthFormSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            console.error("authenticateUserAction: Zod validation failed:", validatedFields.error.flatten().fieldErrors);
            return {
                message: '输入无效。请检查您填写的信息。',
                errors: validatedFields.error.flatten().fieldErrors,
                success: false
            };
        }
        const { minecraftUsername, password, authMode, lot_number, captcha_output, pass_token, gen_time } = validatedFields.data;
        const isCaptchaValid = await verifyGeetestV4(lot_number, captcha_output, pass_token, gen_time);
        if (!isCaptchaValid) {
            console.warn("authenticateUserAction: Geetest validation failed.");
            return {
                message: '人机验证失败，请重试。',
                errors: {
                    captcha: [
                        '人机验证失败或已过期，请刷新验证码后重试。'
                    ]
                },
                success: false
            };
        }
        console.log("authenticateUserAction: Geetest validation successful.");
        if (authMode === 'login') {
            console.log(`authenticateUserAction: Attempting login for user "${minecraftUsername}"`);
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername); // Case-insensitive search
            if (!user) {
                console.warn(`authenticateUserAction: Login failed - user "${minecraftUsername}" not found.`);
                return {
                    message: '用户不存在。请检查您的用户名或进行注册。',
                    errors: {
                        minecraftUsername: [
                            '该用户不存在。'
                        ]
                    },
                    success: false
                };
            }
            // IMPORTANT: For prototype, direct password comparison. In production, use bcrypt.compare.
            if (!user.password || user.password !== password) {
                console.warn(`authenticateUserAction: Login failed - incorrect password for user "${minecraftUsername}".`);
                return {
                    message: '密码不正确。',
                    errors: {
                        password: [
                            '密码不正确。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: Login successful for user "${user.username}" (ID: ${user.id}). Setting cookie.`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', user.id, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
        } else if (authMode === 'register') {
            console.log(`authenticateUserAction: Attempting registration for user "${minecraftUsername}"`);
            // Redundant password match check as Zod refine should catch it, but good for clarity
            if (validatedFields.data.password !== validatedFields.data.confirmPassword) {
                console.warn(`authenticateUserAction: Registration failed - passwords do not match for "${minecraftUsername}".`);
                return {
                    message: "两次输入的密码不匹配。",
                    errors: {
                        confirmPassword: [
                            "两次输入的密码不匹配。"
                        ]
                    },
                    success: false
                };
            }
            const isNameMCValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkNameMC"])(minecraftUsername);
            if (!isNameMCValid) {
                console.warn(`authenticateUserAction: Registration failed - NameMC validation failed for "${minecraftUsername}".`);
                return {
                    message: '此 Minecraft 用户名在 NameMC 上无效或无法验证。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名在 NameMC 上无效或无法验证。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: NameMC validation successful for "${minecraftUsername}".`);
            const existingUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername); // Case-insensitive search
            if (existingUser) {
                console.warn(`authenticateUserAction: Registration failed - username "${minecraftUsername}" already exists.`);
                return {
                    message: '此 Minecraft 用户名已被注册。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名已被注册。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: Username "${minecraftUsername}" is available.`);
            let newUser = null;
            try {
                newUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"])({
                    id: minecraftUsername,
                    username: minecraftUsername,
                    password: password,
                    op: 0,
                    avatarUrl: `https://placehold.co/100x100.png?text=${minecraftUsername.substring(0, 2).toUpperCase()}`
                });
                console.log(`authenticateUserAction: User "${minecraftUsername}" created successfully (ID: ${newUser?.id}).`);
            } catch (error) {
                console.error("authenticateUserAction - Registration - apiCreateUser failed:", error);
                return {
                    message: `创建用户时出错: ${error.message || '未知错误'}`,
                    errors: {
                        form: [
                            `创建用户时出错: ${error.message || '未知错误'}`
                        ]
                    },
                    success: false
                };
            }
            if (!newUser || !newUser.id) {
                console.error("authenticateUserAction: Registration failed - newUser object or ID is null after creation.");
                return {
                    message: '创建用户后未能获取用户信息。',
                    errors: {
                        form: [
                            '创建用户后未能获取用户信息。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: Registration successful for user "${newUser.username}" (ID: ${newUser.id}). Setting cookie.`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', newUser.id, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
        } else {
            console.error(`authenticateUserAction: Invalid authMode "${authMode}".`);
            return {
                message: "无效的操作模式。",
                success: false,
                errors: {
                    authMode: [
                        "无效的操作模式。"
                    ]
                }
            };
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
            console.log("authenticateUserAction: Redirecting...");
            throw error;
        }
        console.error("authenticateUserAction - Top-level Server Error:", error);
        return {
            message: '认证过程中发生服务器内部错误，请稍后再试。',
            success: false,
            errors: {
                form: [
                    '认证过程中发生服务器内部错误，请稍后再试。'
                ]
            }
        };
    }
    console.log("authenticateUserAction: Redirecting to /dashboard.");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete('userId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSessionUser() {
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().get('userId')?.value;
    if (!userId) return null;
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
        return user || null;
    } catch (error) {
        console.error("获取会话用户失败:", error);
        return null;
    }
}
// --- Event Actions ---
const CreateEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "活动名称至少需要3个字符。"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().refine((date)=>!isNaN(Date.parse(date)), "无效的日期格式。"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, "描述至少需要10个字符。"),
    participantLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>val === "" || val === null || val === undefined ? undefined : Number(val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().positive().optional().nullable()),
    cdKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(4, "活动代码至少需要4个字符。").max(20, "活动代码最多20个字符。"),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url("无效的图片链接。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    userPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "您的账户密码不能为空。")
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createEventAction(prevState, formData) {
    try {
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = CreateEventSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: '创建活动失败。请检查所填字段。',
                success: false
            };
        }
        const user = await getSessionUser();
        if (!user) {
            return {
                message: '需要认证才能创建活动。请先登录。',
                errors: {
                    form: [
                        '请先登录。'
                    ]
                },
                success: false
            };
        }
        if (user.op !== 1) {
            return {
                message: '您没有创建活动的权限。',
                errors: {
                    form: [
                        '权限不足。'
                    ]
                },
                success: false
            };
        }
        if (!user.password || user.password !== validatedFields.data.userPassword) {
            return {
                errors: {
                    ...validatedFields.error?.flatten().fieldErrors || {},
                    userPassword: [
                        '您的账户密码不正确。'
                    ]
                },
                message: '创建活动失败。账户密码验证失败。',
                success: false
            };
        }
        let newEventId;
        const { userPassword, ...eventDataForApi } = validatedFields.data;
        const newEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"])(eventDataForApi, user.id);
        newEventId = newEvent.id;
        if (newEventId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${newEventId}`);
        } else {
            return {
                message: '创建活动后未能获取活动ID。',
                errors: {
                    form: [
                        '创建活动后未能获取活动ID。'
                    ]
                },
                success: false
            };
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'digest' in error && error.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.error("Create Event Action - Server Error:", error);
        return {
            message: '创建活动时发生意外的服务器错误。',
            errors: {
                form: [
                    '创建活动时发生意外的服务器错误。'
                ]
            },
            success: false
        };
    }
}
const UpdateEventSchema = CreateEventSchema.extend({
    eventId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "Event ID is required.")
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateEventAction(prevState, formData) {
    try {
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = UpdateEventSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: '更新活动失败。请检查所填字段。',
                success: false
            };
        }
        const user = await getSessionUser();
        if (!user) {
            return {
                message: '需要认证才能更新活动。请先登录。',
                errors: {
                    form: [
                        '请先登录。'
                    ]
                },
                success: false
            };
        }
        if (user.op !== 1) {
            return {
                message: '您没有更新活动的权限。',
                errors: {
                    form: [
                        '权限不足。'
                    ]
                },
                success: false
            };
        }
        if (!user.password || user.password !== validatedFields.data.userPassword) {
            return {
                errors: {
                    ...validatedFields.error?.flatten().fieldErrors || {},
                    userPassword: [
                        '您的账户密码不正确。'
                    ]
                },
                message: '更新活动失败。账户密码验证失败。',
                success: false
            };
        }
        const { userPassword, eventId, ...eventDataToUpdate } = validatedFields.data;
        const updatedEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEventById"])(eventId, eventDataToUpdate);
        if (!updatedEvent) {
            return {
                message: '更新活动失败，活动未找到或没有更改。',
                errors: {
                    eventId: [
                        '活动未找到或没有进行任何更改。'
                    ]
                },
                success: false
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${validatedFields.data.eventId}`);
    } catch (error) {
        if (error && typeof error === 'object' && 'digest' in error && error.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.error("Update Event Action - Server Error:", error);
        return {
            message: '更新活动时发生意外的服务器错误。',
            errors: {
                form: [
                    '更新活动时发生意外的服务器错误。'
                ]
            },
            success: false
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteEventAction(eventId, adminPassword) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '需要认证才能删除活动。请先登录。'
        };
    }
    if (user.op !== 1) {
        return {
            success: false,
            message: '您没有删除活动的权限。'
        };
    }
    if (!user.password || user.password !== adminPassword) {
        return {
            success: false,
            message: '您的账户密码不正确，无法删除活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEventById"])(eventId);
        return result;
    } catch (error) {
        console.error("删除活动错误:", error);
        return {
            success: false,
            message: '在服务器上删除活动失败。请稍后重试。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEventAction(eventId, cdKeyInput) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能加入活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEvent"])(user.id, eventId, cdKeyInput);
        return result;
    } catch (error) {
        console.error("加入活动错误:", error);
        return {
            success: false,
            message: '加入活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEventUsingCdKeyOnlyAction(cdKey) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能加入活动。'
        };
    }
    if (!cdKey || cdKey.trim() === '') {
        return {
            success: false,
            message: '请输入有效的活动代码。'
        };
    }
    const eventToJoin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventByCdKey"])(cdKey);
    if (!eventToJoin) {
        return {
            success: false,
            message: '具有此活动代码的活动未找到。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEvent"])(user.id, eventToJoin.id, cdKey);
        return result;
    } catch (error) {
        console.error("使用活动代码加入活动错误:", error);
        return {
            success: false,
            message: '使用活动代码加入活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ leaveEventAction(eventId) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能离开活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leaveEvent"])(user.id, eventId);
        return result;
    } catch (error) {
        console.error("离开活动错误:", error);
        return {
            success: false,
            message: '离开活动时发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkInAction(eventId) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能签到。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkInUser"])(user.id, eventId);
        return result;
    } catch (error) {
        console.error("签到错误:", error);
        return {
            success: false,
            message: '签到过程中发生服务器错误。'
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventDetailsAction(eventId) {
    try {
        const event = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventById"])(eventId);
        return event || null;
    } catch (error) {
        console.error("获取活动详情错误 (action):", error);
        return null;
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventsAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"])();
    } catch (error) {
        console.error("获取所有活动失败 (action):", error);
        return [];
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserProfile(userId) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
    if (!user) {
        console.warn(`用户个人资料未找到: ${userId}`);
        return null;
    }
    const joinedEvents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventsForUser"])(userId);
    return {
        user: {
            ...user
        },
        joinedEvents: joinedEvents.map((e)=>({
                ...e
            }))
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAnnouncementsAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncements"])();
    } catch (error) {
        console.error("获取公告失败 (action):", error);
        return [];
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUsersAction() {
    const currentUser = await getSessionUser();
    if (!currentUser || currentUser.op !== 1) {
        console.warn("非管理员尝试获取用户列表。");
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsers"])();
}
const AdminAddUserFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    minecraftUsername: MinecraftUsernameSchema,
    avatarUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url("无效的头像链接。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        '0',
        '1'
    ]).transform(Number),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(6, "密码至少需要6个字符。"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    adminConfirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "需要您的密码来确认此操作。")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "两次输入的密码不匹配。",
    path: [
        "confirmPassword"
    ]
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ adminAddUserAction(prevState, formData) {
    try {
        const performingUser = await getSessionUser();
        if (!performingUser || performingUser.op !== 1) {
            return {
                message: "您没有权限执行此操作。",
                success: false,
                errors: {
                    form: [
                        "权限不足。"
                    ]
                }
            };
        }
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = AdminAddUserFormSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            return {
                message: '输入无效。请检查您填写的信息。',
                errors: validatedFields.error.flatten().fieldErrors,
                success: false
            };
        }
        const { minecraftUsername, avatarUrl, op, password, adminConfirmPassword } = validatedFields.data;
        if (performingUser.password !== adminConfirmPassword) {
            return {
                message: '您的账户密码不正确，无法授权此操作。',
                errors: {
                    adminConfirmPassword: [
                        '管理员密码不正确。'
                    ]
                },
                success: false
            };
        }
        const isNameMCValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkNameMC"])(minecraftUsername);
        if (!isNameMCValid) {
            return {
                message: '此 Minecraft 用户名在 NameMC 上无效或无法验证。',
                errors: {
                    minecraftUsername: [
                        '此 Minecraft 用户名在 NameMC 上无效或无法验证。'
                    ]
                },
                success: false
            };
        }
        const existingUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername);
        if (existingUser) {
            return {
                message: '此 Minecraft 用户名已被注册。',
                errors: {
                    minecraftUsername: [
                        '此 Minecraft 用户名已被注册。'
                    ]
                },
                success: false
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"])({
            id: minecraftUsername,
            username: minecraftUsername,
            avatarUrl: avatarUrl || `https://placehold.co/100x100.png?text=${minecraftUsername.substring(0, 2).toUpperCase()}`,
            op: op,
            password: password
        });
        return {
            message: `用户 ${minecraftUsername} 已成功创建。`,
            success: true
        };
    } catch (error) {
        console.error("Admin Add User Action - Server Error:", error);
        return {
            message: '创建用户时发生服务器内部错误。',
            success: false,
            errors: {
                form: [
                    '创建用户时发生服务器内部错误。'
                ]
            }
        };
    }
}
const AdminUpdateUserFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    userIdToUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "用户ID是必需的。"),
    minecraftUsername: MinecraftUsernameSchema,
    avatarUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url("无效的头像链接。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        '0',
        '1'
    ]).transform(Number),
    newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(6, "新密码至少需要6个字符。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    confirmNewPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    adminConfirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "需要您的密码来确认更改。")
}).refine((data)=>{
    if (data.newPassword && data.newPassword !== data.confirmNewPassword) {
        return false;
    }
    return true;
}, {
    message: "两次输入的新密码不匹配。",
    path: [
        "confirmNewPassword"
    ]
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ adminUpdateUserAction(prevState, formData) {
    try {
        const performingUser = await getSessionUser();
        if (!performingUser || performingUser.op !== 1) {
            return {
                message: "您没有权限执行此操作。",
                success: false,
                errors: {
                    form: [
                        "权限不足。"
                    ]
                }
            };
        }
        const rawFormData = Object.fromEntries(formData.entries());
        const validatedFields = AdminUpdateUserFormSchema.safeParse(rawFormData);
        if (!validatedFields.success) {
            return {
                message: '输入无效。请检查您填写的信息。',
                errors: validatedFields.error.flatten().fieldErrors,
                success: false
            };
        }
        const { userIdToUpdate, minecraftUsername, avatarUrl, op, newPassword, adminConfirmPassword } = validatedFields.data;
        if (performingUser.password !== adminConfirmPassword) {
            return {
                message: '您的账户密码不正确，无法授权此更改。',
                errors: {
                    adminConfirmPassword: [
                        '管理员密码不正确。'
                    ]
                },
                success: false
            };
        }
        const userToUpdate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userIdToUpdate);
        if (!userToUpdate) {
            return {
                message: '要更新的用户未找到。',
                errors: {
                    userIdToUpdate: [
                        '用户未找到。'
                    ]
                },
                success: false
            };
        }
        if (minecraftUsername.toLowerCase() !== userToUpdate.username.toLowerCase()) {
            const existingUserWithNewName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername);
            if (existingUserWithNewName && existingUserWithNewName.id !== userIdToUpdate) {
                return {
                    message: '此 Minecraft 用户名已被其他用户注册。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名已被其他用户注册。'
                        ]
                    },
                    success: false
                };
            }
            const isNameMCValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkNameMC"])(minecraftUsername);
            if (!isNameMCValid) {
                return {
                    message: '新的 Minecraft 用户名在 NameMC 上无效或无法验证。',
                    errors: {
                        minecraftUsername: [
                            '新的 Minecraft 用户名在 NameMC 上无效或无法验证。'
                        ]
                    },
                    success: false
                };
            }
        }
        const updateData = {
            username: minecraftUsername,
            avatarUrl: avatarUrl || userToUpdate.avatarUrl,
            op: op
        };
        if (newPassword) {
            updateData.password = newPassword; // Plaintext for prototype
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserById"])(userIdToUpdate, updateData);
        return {
            message: `用户 ${minecraftUsername} (ID: ${userIdToUpdate}) 已成功更新。`,
            success: true
        };
    } catch (error) {
        console.error("Admin Update User Action - Server Error:", error);
        return {
            message: '更新用户时发生服务器内部错误。',
            success: false,
            errors: {
                form: [
                    '更新用户时发生服务器内部错误。'
                ]
            }
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ adminDeleteUserAction(userIdToDelete, adminConfirmPassword) {
    const performingUser = await getSessionUser();
    if (!performingUser || performingUser.op !== 1) {
        return {
            success: false,
            message: "您没有权限执行此操作。"
        };
    }
    if (performingUser.id === userIdToDelete) {
        return {
            success: false,
            message: "您不能删除自己的账户。"
        };
    }
    if (performingUser.password !== adminConfirmPassword) {
        return {
            success: false,
            message: "您的账户密码不正确，无法授权删除操作。"
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUserById"])(userIdToDelete);
        return result;
    } catch (error) {
        console.error("Admin Delete User Action - Server Error:", error);
        return {
            success: false,
            message: "删除用户时发生服务器内部错误。"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    authenticateUserAction,
    logout,
    getSessionUser,
    createEventAction,
    updateEventAction,
    deleteEventAction,
    joinEventAction,
    joinEventUsingCdKeyOnlyAction,
    leaveEventAction,
    checkInAction,
    getEventDetailsAction,
    getEventsAction,
    getUserProfile,
    getAnnouncementsAction,
    getUsersAction,
    adminAddUserAction,
    adminUpdateUserAction,
    adminDeleteUserAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(authenticateUserAction, "600ff814380961b1677e537ea3efea0cdc5011f63e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "002dca974b2b2dbfb79c18855941474a44960be452", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "000a3c0459b110a23277041375a40884fd7894f8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEventAction, "600d96d8a257cd66bdea1261d22e70a359d4c7105b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEventAction, "6037c7960096ccccc14cc1b320b52c21347f2a3cd1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEventAction, "60afbb9bb41755531d36134ffd78b9f4726ef1b247", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventAction, "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventUsingCdKeyOnlyAction, "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(leaveEventAction, "40c9e4d36476a8eadf64425c058d41fa958826253d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkInAction, "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventDetailsAction, "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventsAction, "00a2cba85f720f47947bfd867820e76e5eb45548b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "40025ab292c69b6d0d92536eed959d4b0a09b21e4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnnouncementsAction, "00e40d1753d2794c1a1b8ac004bf987b29297ef20f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsersAction, "0064db2e7dd8e556db8a0d045612a968c3e23e9100", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminAddUserAction, "6023e1049b3e36a74763e714f6ef74d0fd819e276d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminUpdateUserAction, "608149bf6df1965e95adec1596e570c4d6d6f236d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adminDeleteUserAction, "605ef4341912dfc23a183c3011686b56b9850db6ef", null);
}}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "0064db2e7dd8e556db8a0d045612a968c3e23e9100": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUsersAction"]),
    "00a2cba85f720f47947bfd867820e76e5eb45548b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventsAction"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncementsAction"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkInAction"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventDetailsAction"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leaveEventAction"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventUsingCdKeyOnlyAction"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEventAction"]),
    "600ff814380961b1677e537ea3efea0cdc5011f63e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authenticateUserAction"]),
    "6023e1049b3e36a74763e714f6ef74d0fd819e276d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAddUserAction"]),
    "6037c7960096ccccc14cc1b320b52c21347f2a3cd1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEventAction"]),
    "605ef4341912dfc23a183c3011686b56b9850db6ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDeleteUserAction"]),
    "608149bf6df1965e95adec1596e570c4d6d6f236d1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminUpdateUserAction"]),
    "60afbb9bb41755531d36134ffd78b9f4726ef1b247": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEventAction"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000a3c0459b110a23277041375a40884fd7894f8af"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dca974b2b2dbfb79c18855941474a44960be452"]),
    "0064db2e7dd8e556db8a0d045612a968c3e23e9100": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["0064db2e7dd8e556db8a0d045612a968c3e23e9100"]),
    "00a2cba85f720f47947bfd867820e76e5eb45548b1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00a2cba85f720f47947bfd867820e76e5eb45548b1"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e40d1753d2794c1a1b8ac004bf987b29297ef20f"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40025ab292c69b6d0d92536eed959d4b0a09b21e4a"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c9e4d36476a8eadf64425c058d41fa958826253d"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600d96d8a257cd66bdea1261d22e70a359d4c7105b"]),
    "600ff814380961b1677e537ea3efea0cdc5011f63e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600ff814380961b1677e537ea3efea0cdc5011f63e"]),
    "6023e1049b3e36a74763e714f6ef74d0fd819e276d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6023e1049b3e36a74763e714f6ef74d0fd819e276d"]),
    "6037c7960096ccccc14cc1b320b52c21347f2a3cd1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6037c7960096ccccc14cc1b320b52c21347f2a3cd1"]),
    "605ef4341912dfc23a183c3011686b56b9850db6ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["605ef4341912dfc23a183c3011686b56b9850db6ef"]),
    "608149bf6df1965e95adec1596e570c4d6d6f236d1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["608149bf6df1965e95adec1596e570c4d6d6f236d1"]),
    "60afbb9bb41755531d36134ffd78b9f4726ef1b247": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60afbb9bb41755531d36134ffd78b9f4726ef1b247"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60d2ba7ffe693511748e8889b5aa0f9b79c91ea589"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$auth$292f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(auth)/login/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(auth)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(auth)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(auth)/login/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(auth)/login/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(auth)/login/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(auth)/login/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(auth)/login/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(auth)/login/page.tsx", "default");
}}),
"[project]/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(auth)/login/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/login/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$login$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(auth)/login/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__80cb5e47._.js.map