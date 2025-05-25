module.exports = {

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
        password: '123456',
        qqNumber: '10001'
    },
    {
        id: 'Alex',
        username: 'Alex',
        avatarUrl: `https://placehold.co/100x100.png?text=Al`,
        op: 0,
        password: '123456',
        qqNumber: '10002'
    },
    {
        id: 'Notch',
        username: 'Notch',
        avatarUrl: `https://placehold.co/100x100.png?text=No`,
        op: 1,
        password: '123456',
        qqNumber: '10003'
    },
    {
        id: 'dream_pep_id',
        username: 'dream_pep',
        avatarUrl: `https://placehold.co/100x100.png?text=dr`,
        op: 1,
        password: '123456',
        qqNumber: '12345678'
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
                password: '123456',
                qqNumber: '10001'
            },
            {
                id: 'dream_pep_id',
                username: 'dream_pep',
                avatarUrl: `https://placehold.co/100x100.png?text=dr`,
                isCheckedIn: false,
                op: 1,
                password: '123456',
                qqNumber: '12345678'
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
                password: '123456',
                qqNumber: '10001'
            },
            {
                id: 'Alex',
                username: 'Alex',
                avatarUrl: `https://placehold.co/100x100.png?text=Al`,
                isCheckedIn: false,
                op: 0,
                password: '123456',
                qqNumber: '10002'
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
                password: '123456',
                qqNumber: '12345678'
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
                password: "123456",
                qqNumber: '12345678'
            }
        ],
        organizerId: 'dream_pep_id'
    }
];
const defaultAnnouncements = [
    {
        id: 'announce1',
        title: '欢迎来到 VRCub 活动中心!',
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/default-data.ts [app-rsc] (ecmascript)");
;
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'minevent.sqlite');
console.log(`[DB] Database path: ${DB_PATH}`);
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_DIR)) {
    console.log(`[DB] Data directory does not exist. Creating: ${DATA_DIR}`);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(DATA_DIR, {
        recursive: true
    });
}
const db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"](DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
function tableExists(tableName) {
    const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name = ? COLLATE NOCASE;");
    return !!stmt.get(tableName);
}
function columnExists(tableName, columnName) {
    if (!tableExists(tableName)) return false;
    try {
        const stmt = db.prepare(`PRAGMA table_info(${tableName});`);
        const columns = stmt.all();
        return columns.some((col)=>col.name.toLowerCase() === columnName.toLowerCase());
    } catch (e) {
        console.error(`[DB] Error checking column ${columnName} in ${tableName}:`, e);
        return false; // Assume not exists if pragma fails
    }
}
function initializeDatabase() {
    console.log('[DB] Initializing database schema and data...');
    let usersTableWasRecreated = false;
    if (tableExists('users')) {
        const hasQQ = columnExists('users', 'qqNumber');
        const hasBan = columnExists('users', 'ban');
        if (!hasQQ || !hasBan) {
            console.warn(`[DB] Users table is missing 'qqNumber' (exists: ${hasQQ}) or 'ban' (exists: ${hasBan}) column. Dropping and recreating tables.`);
            try {
                db.exec('DROP TABLE IF EXISTS event_participants;');
                db.exec('DROP TABLE IF EXISTS events;'); // Drop events too as it has FK to users
                db.exec('DROP TABLE IF EXISTS users;');
                console.log("[DB] Dropped 'event_participants', 'events', and 'users' tables for schema refresh.");
                usersTableWasRecreated = true;
            } catch (e) {
                console.error("[DB] CRITICAL: Error dropping tables for schema refresh:", e.message);
            // If dropping fails, subsequent CREATE TABLE IF NOT EXISTS might hit issues with the old schema.
            // This is a critical state.
            }
        }
    } else {
        usersTableWasRecreated = true; // Users table doesn't exist, so it will be created.
    }
    // Create tables - these will only execute if the tables don't exist (or were just dropped)
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      avatarUrl TEXT,
      op INTEGER DEFAULT 0,
      password TEXT,
      qqNumber TEXT UNIQUE,
      ban INTEGER DEFAULT 0 
    );
  `);
    console.log('[DB] Users table schema ensured.');
    db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      participantLimit INTEGER,
      cdKey TEXT NOT NULL, 
      imageUrl TEXT,
      organizerId TEXT NOT NULL,
      endDate TEXT,
      timeMode TEXT NOT NULL DEFAULT 'specified',
      isCheckInEnabled INTEGER NOT NULL DEFAULT 1,
      FOREIGN KEY (organizerId) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
    console.log('[DB] Events table schema ensured.');
    db.exec(`
    CREATE TABLE IF NOT EXISTS announcements (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `);
    console.log('[DB] Announcements table schema ensured.');
    db.exec(`
    CREATE TABLE IF NOT EXISTS event_participants (
      eventId TEXT NOT NULL,
      userId TEXT NOT NULL,
      isCheckedIn INTEGER DEFAULT 0,
      PRIMARY KEY (eventId, userId),
      FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
    console.log('[DB] Event_participants table schema ensured.');
    // Seed Users
    const userCountStmt = db.prepare('SELECT COUNT(*) as count FROM users;');
    const userCountResult = userCountStmt.get();
    if (userCountResult.count === 0 || usersTableWasRecreated) {
        console.log(usersTableWasRecreated ? '[DB] Re-seeding users table as it was recreated.' : '[DB] Users table is empty. Seeding default users...');
        const insertUser = db.prepare('INSERT INTO users (id, username, avatarUrl, op, password, qqNumber, ban) VALUES (@id, @username, @avatarUrl, @op, @password, @qqNumber, @ban)');
        db.transaction(()=>{
            for (const user of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUsers"]){
                insertUser.run({
                    id: user.id,
                    username: user.username,
                    avatarUrl: user.avatarUrl || `https://placehold.co/100x100.png?text=${user.username.substring(0, 2)}`,
                    op: user.op || 0,
                    password: user.password || '123456',
                    qqNumber: user.qqNumber || null,
                    ban: user.ban === undefined ? 0 : user.ban
                });
            }
        })();
        console.log('[DB] Users table seeded.');
    } else {
        console.log('[DB] Users table not empty and schema likely up-to-date. Ensuring default users are present/updated via UPSERT.');
        const upsertUser = db.prepare(`
      INSERT INTO users (id, username, avatarUrl, op, password, qqNumber, ban) 
      VALUES (@id, @username, @avatarUrl, @op, @password, @qqNumber, @ban)
      ON CONFLICT(id) DO UPDATE SET
        username = excluded.username,
        avatarUrl = excluded.avatarUrl,
        op = excluded.op,
        password = excluded.password,
        qqNumber = excluded.qqNumber, 
        ban = excluded.ban;
    `);
        db.transaction(()=>{
            for (const user of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultUsers"]){
                upsertUser.run({
                    id: user.id,
                    username: user.username,
                    avatarUrl: user.avatarUrl || `https://placehold.co/100x100.png?text=${user.username.substring(0, 2)}`,
                    op: user.op || 0,
                    password: user.password || '123456',
                    qqNumber: user.qqNumber || null,
                    ban: user.ban === undefined ? 0 : user.ban
                });
            }
        })();
        console.log('[DB] Default users ensured/updated.');
    }
    // Seed Events (and participants)
    const eventCountStmt = db.prepare('SELECT COUNT(*) as count FROM events');
    const eventCount = eventCountStmt.get();
    if (eventCount.count === 0 || usersTableWasRecreated) {
        if (eventCount.count > 0 && usersTableWasRecreated) {
            console.log("[DB] Re-seeding events and participants because users table was recreated.");
            db.exec('DELETE FROM event_participants;');
            db.exec('DELETE FROM events;');
        }
        console.log('[DB] Seeding events and event_participants tables...');
        const insertEvent = db.prepare('INSERT INTO events (id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled) VALUES (@id, @name, @date, @description, @participantLimit, @cdKey, @imageUrl, @organizerId, @endDate, @timeMode, @isCheckInEnabled)');
        const insertParticipant = db.prepare('INSERT INTO event_participants (eventId, userId, isCheckedIn) VALUES (@eventId, @userId, @isCheckedIn)');
        db.transaction(()=>{
            for (const event of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultEvents"]){
                const organizerExists = db.prepare('SELECT id FROM users WHERE id = ?').get(event.organizerId);
                if (!organizerExists) {
                    console.warn(`[DB] Organizer ${event.organizerId} for event ${event.name} not found. Skipping event seeding.`);
                    continue;
                }
                insertEvent.run({
                    id: event.id,
                    name: event.name,
                    date: event.date,
                    description: event.description,
                    participantLimit: event.participantLimit === undefined ? null : event.participantLimit,
                    cdKey: event.cdKey,
                    imageUrl: event.imageUrl || '',
                    organizerId: event.organizerId,
                    endDate: event.endDate || null,
                    timeMode: event.timeMode || 'specified',
                    isCheckInEnabled: event.isCheckInEnabled === undefined ? 1 : event.isCheckInEnabled ? 1 : 0
                });
                for (const p of event.participants){
                    const userExists = db.prepare('SELECT id FROM users WHERE id = ?').get(p.id);
                    if (userExists) {
                        insertParticipant.run({
                            eventId: event.id,
                            userId: p.id,
                            isCheckedIn: p.isCheckedIn ? 1 : 0
                        });
                    } else {
                        console.warn(`[DB] Skipping participant ${p.id} for event ${event.id} as user does not exist.`);
                    }
                }
            }
        })();
        console.log('[DB] Events and event_participants tables seeded.');
    }
    // Seed Announcements
    const announcementCountStmt = db.prepare('SELECT COUNT(*) as count FROM announcements');
    const announcementCount = announcementCountStmt.get();
    if (announcementCount.count === 0 || usersTableWasRecreated) {
        if (announcementCount.count > 0 && usersTableWasRecreated) {
            console.log("[DB] Re-seeding announcements because users table was recreated.");
            db.exec('DELETE FROM announcements;');
        }
        console.log('[DB] Seeding announcements table...');
        const insertAnnouncement = db.prepare('INSERT INTO announcements (id, title, content, date) VALUES (@id, @title, @content, @date)');
        db.transaction(()=>{
            for (const announcement of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultAnnouncements"]){
                insertAnnouncement.run(announcement);
            }
        })();
        console.log('[DB] Announcements table seeded.');
    }
    console.log('[DB] Database initialization routine complete.');
}
try {
    initializeDatabase();
} catch (err) {
    console.error("[DB] CRITICAL: Database initialization failed during module load:", err.message, err.stack);
}
const __TURBOPACK__default__export__ = db;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00536fe8bef7e10c363a940d1db587b70fb72bbc5d":"getAnnouncements","0057e5e6df920e8c00a7aa90880af5f9d9cd07250b":"getEvents","00a81f99751e3431c051950cd65530132406a90dae":"getUsers","4032b17f741609ae79c0ad3ae205d9205fc1710344":"deleteEventById","403ac7646632d3bf7e0705d863186e94be4c47a4e2":"getEventById","40586533c87675a7e051cf2827058e62688b099288":"getUserByQQNumber","40706802ee8c039e8cb865663bc37ab3953927e7b3":"getUserById","407cedff5dfd4f8f5936a7511e991d0fa9d734e5f7":"createUser","4090cb21113fb6eb74368e3099c6c56f03ce4ac0a3":"getEventsOrganizedByUser","4095338b6a3a35ad5c45c96d4029fc928e0420f9c9":"getUserByUsername","40a310d7ac405de90b0789f0dc8d8df119e6619dbb":"getEventsForUser","40c69c1ae0a3a3a281eeff0eca1c0f553c4f913ecf":"getEventByCdKey","40e7a9a97c7d826d592df6c634242dd0be381f5476":"deleteUserById","60374ffe72c85a792611842b973f9eb85e150e75c3":"leaveEvent","607fbaefecefebb771f2434d2933461066d6b1ff72":"updateEventById","60d768a39890887191264d06a591315385d75d2c21":"updateUserById","60f577007be241577f4901683e822d892978e28f85":"checkInUser","60fe7d7e79c55b13c561b8b5e15abe71c3f13486c9":"createEvent","70cc029da49f32f3993bd633f3664bbbbcb78d5331":"joinEvent"} */ __turbopack_context__.s({
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
    "getEventsOrganizedByUser": (()=>getEventsOrganizedByUser),
    "getUserById": (()=>getUserById),
    "getUserByQQNumber": (()=>getUserByQQNumber),
    "getUserByUsername": (()=>getUserByUsername),
    "getUsers": (()=>getUsers),
    "joinEvent": (()=>joinEvent),
    "leaveEvent": (()=>leaveEvent),
    "updateEventById": (()=>updateEventById),
    "updateUserById": (()=>updateUserById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)"); // db instance from db.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUsers() {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password, qqNumber, ban FROM users');
    return stmt.all();
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserById(userId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password, qqNumber, ban FROM users WHERE id = ?');
    return stmt.get(userId);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserByUsername(username) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password, qqNumber, ban FROM users WHERE lower(username) = lower(?)');
    return stmt.get(username);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserByQQNumber(qqNumber) {
    if (!qqNumber || qqNumber.trim() === '') return undefined;
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, username, avatarUrl, op, password, qqNumber, ban FROM users WHERE qqNumber = ?');
    return stmt.get(qqNumber);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createUser(userData) {
    const newUser = {
        id: userData.id || userData.username,
        username: userData.username,
        avatarUrl: userData.avatarUrl || `https://placehold.co/100x100.png?text=${userData.username.substring(0, 2).toUpperCase()}`,
        op: userData.op || 0,
        password: userData.password,
        qqNumber: userData.qqNumber || undefined,
        ban: userData.ban === undefined ? 0 : userData.ban
    };
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO users (id, username, avatarUrl, op, password, qqNumber, ban) VALUES (@id, @username, @avatarUrl, @op, @password, @qqNumber, @ban)');
    try {
        stmt.run(newUser);
        const createdUser = await getUserById(newUser.id);
        if (!createdUser) throw new Error('User creation seemed successful but could not fetch the new user.');
        return createdUser;
    } catch (error) {
        console.error(`[Data] Failed to create user ${userData.username}:`, error);
        throw new Error(`[Data] Failed to create user ${userData.username}: ${error.message}`);
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateUserById(userId, userData) {
    const currentUser = await getUserById(userId);
    if (!currentUser) return null;
    const fieldsToUpdate = {};
    if (userData.username !== undefined) fieldsToUpdate.username = userData.username;
    if (userData.avatarUrl !== undefined) fieldsToUpdate.avatarUrl = userData.avatarUrl;
    if (userData.op !== undefined) fieldsToUpdate.op = userData.op;
    if (userData.password !== undefined && userData.password !== '') fieldsToUpdate.password = userData.password;
    if (userData.qqNumber !== undefined) fieldsToUpdate.qqNumber = userData.qqNumber === '' ? null : userData.qqNumber;
    if (userData.ban !== undefined) fieldsToUpdate.ban = userData.ban;
    if (Object.keys(fieldsToUpdate).length === 0) {
        return currentUser;
    }
    const setClauses = Object.keys(fieldsToUpdate).map((key)=>`${key} = @${key}`).join(', ');
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`UPDATE users SET ${setClauses} WHERE id = @id`);
    try {
        stmt.run({
            ...fieldsToUpdate,
            id: userId
        });
    } catch (error) {
        console.error(`[Data] Failed to update user ${userId}:`, error);
        throw new Error(`[Data] Failed to update user ${userId}: ${error.message}`);
    }
    return await getUserById(userId);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteUserById(userId) {
    const eventOrganizerCheckStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT COUNT(*) as count FROM events WHERE organizerId = ?');
    const organizerCountResult = eventOrganizerCheckStmt.get(userId);
    if (organizerCountResult.count > 0) {
        return {
            success: false,
            message: `无法删除用户 ${userId}，因为他们是 ${organizerCountResult.count} 个活动的组织者。请先转移或删除这些活动。`
        };
    }
    const deleteUserStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM users WHERE id = ?');
    const result = deleteUserStmt.run(userId); // Foreign key ON DELETE CASCADE handles event_participants
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
    SELECT u.id, u.username, u.avatarUrl, u.op, u.password, u.qqNumber, u.ban, ep.isCheckedIn
    FROM users u
    JOIN event_participants ep ON u.id = ep.userId
    WHERE ep.eventId = ?
  `);
    const participantsData = stmt.all(eventId);
    return participantsData.map((p)=>({
            ...p,
            isCheckedIn: !!p.isCheckedIn,
            ban: p.ban || 0
        }));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEvents() {
    const eventsStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled FROM events');
    const rawEvents = eventsStmt.all();
    const events = [];
    for (const rawEvent of rawEvents){
        const participants = await getEventParticipants(rawEvent.id);
        events.push({
            ...rawEvent,
            participants,
            isCheckInEnabled: !!rawEvent.isCheckInEnabled
        });
    }
    return events;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventById(id) {
    const eventStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled FROM events WHERE id = ?');
    const rawEvent = eventStmt.get(id);
    if (!rawEvent) return undefined;
    const participants = await getEventParticipants(rawEvent.id);
    return {
        ...rawEvent,
        participants,
        isCheckInEnabled: !!rawEvent.isCheckInEnabled
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventsForUser(userId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`
    SELECT e.id, e.name, e.date, e.description, e.participantLimit, e.cdKey, e.imageUrl, e.organizerId, e.endDate, e.timeMode, e.isCheckInEnabled
    FROM events e
    JOIN event_participants ep ON e.id = ep.eventId
    WHERE ep.userId = ?
  `);
    const rawEvents = stmt.all(userId);
    const joinedEvents = [];
    for (const rawEvent of rawEvents){
        const participants = await getEventParticipants(rawEvent.id);
        joinedEvents.push({
            ...rawEvent,
            participants,
            isCheckInEnabled: !!rawEvent.isCheckInEnabled
        });
    }
    return joinedEvents;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventByCdKey(cdKey) {
    const eventStmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled FROM events WHERE lower(cdKey) = lower(?)');
    const rawEvent = eventStmt.get(cdKey);
    if (!rawEvent) return undefined;
    const participants = await getEventParticipants(rawEvent.id);
    return {
        ...rawEvent,
        participants,
        isCheckInEnabled: !!rawEvent.isCheckInEnabled
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createEvent(eventData, organizerId) {
    const newEventId = `event_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const participantLimit = typeof eventData.participantLimit === 'number' && !isNaN(eventData.participantLimit) ? eventData.participantLimit : null;
    let finalCdKey = eventData.cdKey;
    if (eventData.timeMode === 'long-term') {
        finalCdKey = `LT_${Date.now().toString(36)}_${Math.random().toString(36).substring(2, 7)}`;
    }
    const newEventRow = {
        id: newEventId,
        name: eventData.name,
        date: eventData.date,
        description: eventData.description,
        participantLimit: participantLimit,
        cdKey: finalCdKey,
        imageUrl: eventData.imageUrl || '',
        organizerId,
        endDate: eventData.timeMode === 'specified' ? eventData.endDate || null : null,
        timeMode: eventData.timeMode || 'specified',
        isCheckInEnabled: eventData.timeMode === 'long-term' ? 0 : eventData.isCheckInEnabled === undefined ? 1 : eventData.isCheckInEnabled ? 1 : 0
    };
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO events (id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled) VALUES (@id, @name, @date, @description, @participantLimit, @cdKey, @imageUrl, @organizerId, @endDate, @timeMode, @isCheckInEnabled)');
    stmt.run(newEventRow);
    const createdEvent = await getEventById(newEventId);
    if (!createdEvent) throw new Error('[Data] Event creation seemed successful but could not fetch the new event.');
    return createdEvent;
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateEventById(eventId, eventData) {
    const { name, date, description, participantLimit, cdKey, imageUrl, endDate, timeMode, isCheckInEnabled } = eventData;
    const existingEvent = await getEventById(eventId);
    if (!existingEvent) return null;
    const fieldsToUpdate = {};
    if (name !== undefined) fieldsToUpdate.name = name;
    if (date !== undefined) fieldsToUpdate.date = date;
    if (description !== undefined) fieldsToUpdate.description = description;
    if (participantLimit !== undefined) {
        fieldsToUpdate.participantLimit = typeof participantLimit === 'number' && !isNaN(participantLimit) ? participantLimit : null;
    }
    if (cdKey !== undefined && (timeMode || existingEvent.timeMode) !== 'long-term') {
        fieldsToUpdate.cdKey = cdKey;
    }
    if (imageUrl !== undefined) fieldsToUpdate.imageUrl = imageUrl;
    const effectiveTimeMode = timeMode || existingEvent.timeMode;
    if (timeMode !== undefined && timeMode !== existingEvent.timeMode) fieldsToUpdate.timeMode = timeMode;
    if (effectiveTimeMode === 'long-term') {
        fieldsToUpdate.endDate = null;
        fieldsToUpdate.isCheckInEnabled = 0;
    } else {
        if (endDate !== undefined) fieldsToUpdate.endDate = endDate || null; // Allow clearing endDate
        if (isCheckInEnabled !== undefined) fieldsToUpdate.isCheckInEnabled = isCheckInEnabled ? 1 : 0;
    }
    if (Object.keys(fieldsToUpdate).length === 0) {
        return existingEvent;
    }
    const setClauses = Object.keys(fieldsToUpdate).map((key)=>`${key} = @${key}`).join(', ');
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare(`UPDATE events SET ${setClauses} WHERE id = @eventId`);
    stmt.run({
        ...fieldsToUpdate,
        eventId
    });
    return await getEventById(eventId);
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteEventById(eventId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('DELETE FROM events WHERE id = ?');
    const result = stmt.run(eventId); // Foreign key ON DELETE CASCADE should handle event_participants
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
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEvent(userId, eventId, cdKeyInput) {
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
    if (user.ban === 1) return {
        success: false,
        message: '您的账户已被封禁，无法加入活动。'
    };
    if (event.timeMode !== 'long-term' && event.cdKey.toLowerCase() !== cdKeyInput.toLowerCase()) {
        return {
            success: false,
            message: '无效的活动代码。'
        };
    }
    const currentParticipants = await getEventParticipants(eventId);
    if (event.participantLimit && currentParticipants.length >= event.participantLimit) {
        return {
            success: false,
            message: '活动人数已满。'
        };
    }
    if (currentParticipants.some((p)=>p.id === userId)) {
        const refreshedEvent = await getEventById(eventId);
        return {
            success: true,
            message: '您已加入此活动。',
            event: refreshedEvent
        };
    }
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('INSERT INTO event_participants (eventId, userId, isCheckedIn) VALUES (?, ?, 0)');
    stmt.run(eventId, userId);
    const finalEvent = await getEventById(eventId);
    return {
        success: true,
        message: '成功加入活动！',
        event: finalEvent
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ leaveEvent(userId, eventId) {
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
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkInUser(userId, eventId) {
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
    if (user.ban === 1) return {
        success: false,
        message: '您的账户已被封禁，无法签到。'
    };
    if (!event.isCheckInEnabled) {
        return {
            success: false,
            message: '此活动的签到功能已禁用。'
        };
    }
    if (event.timeMode === 'long-term') {
        return {
            success: false,
            message: '长期活动无需签到。'
        };
    }
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
    const eventStartDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.date);
    const eventEndDate = event.endDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.endDate) : null;
    const now = new Date();
    let canCheckIn = false;
    if (event.timeMode === 'specified') {
        if (eventEndDate) {
            canCheckIn = now >= eventStartDate && now <= eventEndDate;
        } else {
            const eventDayStart = new Date(eventStartDate.getFullYear(), eventStartDate.getMonth(), eventStartDate.getDate(), 0, 0, 0);
            const eventDayEnd = new Date(eventStartDate.getFullYear(), eventStartDate.getMonth(), eventStartDate.getDate(), 23, 59, 59, 999);
            canCheckIn = now >= eventDayStart && now <= eventDayEnd;
        }
    }
    if (!canCheckIn) {
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
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAnnouncements() {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, title, content, date FROM announcements ORDER BY date DESC');
    const announcements = stmt.all();
    return announcements.map((ann)=>({
            ...ann,
            date: ann.date || new Date().toISOString()
        }));
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getEventsOrganizedByUser(userId) {
    const stmt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].prepare('SELECT id, name, date, description, participantLimit, cdKey, imageUrl, organizerId, endDate, timeMode, isCheckInEnabled FROM events WHERE organizerId = ? ORDER BY date DESC');
    const rawEvents = stmt.all(userId);
    const events = [];
    for (const rawEvent of rawEvents){
        const participants = await getEventParticipants(rawEvent.id);
        events.push({
            ...rawEvent,
            participants,
            isCheckInEnabled: !!rawEvent.isCheckInEnabled
        });
    }
    return events;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUsers,
    getUserById,
    getUserByUsername,
    getUserByQQNumber,
    createUser,
    updateUserById,
    deleteUserById,
    getEvents,
    getEventById,
    getEventsForUser,
    getEventByCdKey,
    createEvent,
    updateEventById,
    deleteEventById,
    joinEvent,
    leaveEvent,
    checkInUser,
    getAnnouncements,
    getEventsOrganizedByUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUsers, "00a81f99751e3431c051950cd65530132406a90dae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserById, "40706802ee8c039e8cb865663bc37ab3953927e7b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserByUsername, "4095338b6a3a35ad5c45c96d4029fc928e0420f9c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserByQQNumber, "40586533c87675a7e051cf2827058e62688b099288", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUser, "407cedff5dfd4f8f5936a7511e991d0fa9d734e5f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserById, "60d768a39890887191264d06a591315385d75d2c21", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUserById, "40e7a9a97c7d826d592df6c634242dd0be381f5476", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEvents, "0057e5e6df920e8c00a7aa90880af5f9d9cd07250b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventById, "403ac7646632d3bf7e0705d863186e94be4c47a4e2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventsForUser, "40a310d7ac405de90b0789f0dc8d8df119e6619dbb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventByCdKey, "40c69c1ae0a3a3a281eeff0eca1c0f553c4f913ecf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEvent, "60fe7d7e79c55b13c561b8b5e15abe71c3f13486c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEventById, "607fbaefecefebb771f2434d2933461066d6b1ff72", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEventById, "4032b17f741609ae79c0ad3ae205d9205fc1710344", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEvent, "70cc029da49f32f3993bd633f3664bbbbcb78d5331", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(leaveEvent, "60374ffe72c85a792611842b973f9eb85e150e75c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkInUser, "60f577007be241577f4901683e822d892978e28f85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnnouncements, "00536fe8bef7e10c363a940d1db587b70fb72bbc5d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventsOrganizedByUser, "4090cb21113fb6eb74368e3099c6c56f03ce4ac0a3", null);
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
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days
// --- Authentication ---
const MinecraftUsernameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").max(16, "Minecraft 用户名长度必须在 3 到 16 个字符之间。").regex(/^[a-zA-Z0-9_]+$/, "Minecraft 用户名只能包含字母、数字和下划线。").refine((username)=>!username.startsWith('_') && !username.endsWith('_'), {
    message: "Minecraft 用户名不能以下划线开头或结尾。"
});
const QQNumberSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(5, "QQ号至少为5位数字。").max(15, "QQ号最多为15位数字。").regex(/^\d+$/, "QQ号必须为纯数字。");
const AuthBaseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    minecraftUsername: MinecraftUsernameSchema,
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(6, "密码至少需要6个字符。"),
    authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'login',
        'register'
    ])
});
// Using discriminated union for different fields in login vs register
const AuthFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].discriminatedUnion("authMode", [
    AuthBaseSchema.extend({
        authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal("login")
    }),
    AuthBaseSchema.extend({
        authMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal("register"),
        confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        qqNumber: QQNumberSchema
    })
]).refine((data)=>{
    if (data.authMode === "register") {
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
        const { minecraftUsername, password, authMode } = validatedFields.data;
        let sessionUserIdToSet = undefined;
        let successMessage = '';
        if (authMode === 'login') {
            console.log(`authenticateUserAction: Attempting login for user "${minecraftUsername}"`);
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername); // Case-insensitive for lookup
            if (!user) {
                console.warn(`authenticateUserAction: Login failed - user "${minecraftUsername}" not found.`);
                return {
                    message: '用户不存在或密码错误。',
                    errors: {
                        form: [
                            '用户不存在或密码错误。'
                        ]
                    },
                    success: false
                };
            }
            // IMPORTANT: Password comparison should be case-sensitive if usernames are stored with case.
            // Assuming usernames are stored as entered, but lookups can be case-insensitive.
            // For prototype, direct password comparison.
            if (user.username !== minecraftUsername || !user.password || user.password !== password) {
                console.warn(`authenticateUserAction: Login failed - incorrect username case or password for user "${minecraftUsername}". DB User: ${user.username}`);
                return {
                    message: '用户不存在或密码错误。',
                    errors: {
                        form: [
                            '用户不存在或密码错误。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: Login successful for user "${user.username}" (ID: ${user.id}).`);
            sessionUserIdToSet = user.id;
            successMessage = '登录成功！即将跳转...';
        } else if (authMode === 'register') {
            console.log(`authenticateUserAction: Attempting registration for user "${minecraftUsername}"`);
            const { qqNumber } = validatedFields.data; // qqNumber is only present in the register variant
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
            const existingUserByUsername = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername);
            if (existingUserByUsername) {
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
            const existingUserByQQ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByQQNumber"])(qqNumber);
            if (existingUserByQQ) {
                console.warn(`authenticateUserAction: Registration failed - QQ number "${qqNumber}" already associated with user ${existingUserByQQ.username}.`);
                return {
                    message: '此 QQ 号码已被其他用户绑定。',
                    errors: {
                        qqNumber: [
                            '此 QQ 号码已被其他用户绑定。'
                        ]
                    },
                    success: false
                };
            }
            console.log(`authenticateUserAction: QQ number "${qqNumber}" is available.`);
            let newUser = null;
            try {
                newUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"])({
                    id: minecraftUsername,
                    username: minecraftUsername,
                    password: password,
                    qqNumber: qqNumber,
                    op: 0,
                    avatarUrl: `https://placehold.co/100x100.png?text=${minecraftUsername.substring(0, 2).toUpperCase()}`
                });
                console.log(`authenticateUserAction: User "${minecraftUsername}" created successfully (ID: ${newUser?.id}).`);
            } catch (error) {
                console.error("authenticateUserAction - Registration - apiCreateUser failed:", error);
                return {
                    message: `创建用户时出错: ${error.message || '未知数据库错误'}`,
                    errors: {
                        form: [
                            `创建用户时出错: ${error.message || '未知数据库错误'}`
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
            console.log(`authenticateUserAction: Registration successful for user "${newUser.username}" (ID: ${newUser.id}).`);
            sessionUserIdToSet = newUser.id;
            successMessage = '账户创建成功！即将跳转...';
        }
        if (sessionUserIdToSet) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', sessionUserIdToSet, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
            console.log(`authenticateUserAction: Cookie set for user ${sessionUserIdToSet}. Redirecting to /dashboard. Message: ${successMessage}`);
            // Important: Return success state *before* redirect to allow client to show toast
            // This is tricky with server actions and redirects.
            // The redirect() call will throw an error that Next.js uses to perform the navigation.
            // The state update might not be fully processed by useActionState before the redirect occurs.
            // A common pattern for "flash messages" post-redirect is to use query parameters or a temporary session store.
            // For simplicity now, we rely on the client to show the toast *after* navigation if state.success is true.
            // However, for immediate toast *before* redirect, it's better handled purely client-side after the action promise resolves.
            // Let's return the success state and let the client handle the toast *and* redirect.
            // This is a change from previous direct redirect.
            return {
                success: true,
                message: successMessage,
                userId: sessionUserIdToSet
            };
        } else {
            console.error("authenticateUserAction: sessionUserIdToSet was not defined after auth logic.");
            return {
                message: '认证过程出现意外，未能设置用户会话。',
                success: false,
                errors: {
                    form: [
                        '认证过程出现意外，未能设置用户会话。'
                    ]
                }
            };
        }
    } catch (error) {
        if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
            console.log("authenticateUserAction: Redirecting (caught and re-throwing)...");
            throw error;
        }
        console.error("authenticateUserAction - Top-level Server Error:", error);
        const errorMessage = error instanceof Error ? error.message : '认证过程中发生服务器内部错误。';
        return {
            message: `服务器错误: ${errorMessage} 请稍后再试。`,
            success: false,
            errors: {
                form: [
                    `服务器错误: ${errorMessage} 请稍后再试。`
                ]
            }
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete('userId');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getSessionUser() {
    const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().get('userId')?.value;
    if (!userId) return null;
    try {
        console.log(`getSessionUser: Attempting to get user by ID: ${userId}`);
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
        if (!user) {
            console.warn(`getSessionUser: No user found for ID: ${userId}. Deleting cookie.`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().delete('userId');
            return null;
        }
        console.log(`getSessionUser: User found: ${user.username}`);
        return user;
    } catch (error) {
        console.error("getSessionUser - Error fetching user:", error);
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
        const { userPassword, ...eventDataForApi } = validatedFields.data;
        const newEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"])(eventDataForApi, user.id);
        if (newEvent?.id) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${newEvent.id}`);
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
        if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
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
        if (error && typeof error === 'object' && 'digest' in error && typeof error.digest === 'string' && error.digest.startsWith('NEXT_REDIRECT')) {
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
        user,
        joinedEvents
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
            updateData.password = newPassword;
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
        const errorMessage = error instanceof Error ? error.message : "删除用户时发生服务器内部错误。";
        return {
            success: false,
            message: errorMessage
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__9018871d._.js.map