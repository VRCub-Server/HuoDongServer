module.exports = {

"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ADMIN_CREATE_EVENT_PASSWORD": (()=>ADMIN_CREATE_EVENT_PASSWORD),
    "checkInUser": (()=>checkInUser),
    "createEvent": (()=>createEvent),
    "createUser": (()=>createUser),
    "getAnnouncements": (()=>getAnnouncements),
    "getEventByCdKey": (()=>getEventByCdKey),
    "getEventById": (()=>getEventById),
    "getEvents": (()=>getEvents),
    "getUserById": (()=>getUserById),
    "getUserByUsername": (()=>getUserByUsername),
    "joinEvent": (()=>joinEvent),
    "leaveEvent": (()=>leaveEvent)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.mjs [app-rsc] (ecmascript)");
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const USERS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'users.json');
const EVENTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'events.json');
const ABOUT_USER_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'about-user.json');
const defaultUsers = [
    {
        id: 'Steve',
        username: 'Steve',
        avatarUrl: `https://placehold.co/100x100.png?text=St`,
        joinedEventIds: [
            'event1',
            'event2'
        ],
        op: 0,
        password: '123456'
    },
    {
        id: 'Alex',
        username: 'Alex',
        avatarUrl: `https://placehold.co/100x100.png?text=Al`,
        joinedEventIds: [
            'event2'
        ],
        op: 0,
        password: '123456'
    },
    {
        id: 'Notch',
        username: 'Notch',
        avatarUrl: `https://placehold.co/100x100.png?text=No`,
        joinedEventIds: [],
        op: 1,
        password: '123456'
    },
    {
        id: 'dream_pep_id',
        username: 'dream_pep',
        avatarUrl: `https://placehold.co/100x100.png?text=dr`,
        joinedEventIds: [
            'event1',
            'event3'
        ],
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
async function initializeFile(filePath, defaultContent, fileNameForLog) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR} for ${fileNameForLog}. Returning in-memory defaults.`, mkdirError);
            return defaultContent.map((item)=>({
                    ...item
                })); // Deep copy
        }
    }
    try {
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        if (!Array.isArray(data) || Array.isArray(data) && data.length === 0 && defaultContent.length > 0) {
            console.warn(`${fileNameForLog} is empty or not a valid array. Attempting to initialize with default data.`);
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(defaultContent, null, 2), 'utf-8');
            } catch (writeError) {
                console.error(`CRITICAL: Failed to write ${fileNameForLog} during initialization. Proceeding with in-memory defaults. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
                return defaultContent.map((item)=>({
                        ...item
                    })); // Deep copy
            }
            return defaultContent.map((item)=>({
                    ...item
                })); // Deep copy
        }
        return data.map((item)=>({
                ...item
            })); // Deep copy of potentially complex objects
    } catch (error) {
        // File likely doesn't exist or is corrupted
        console.warn(`Error reading/parsing ${fileNameForLog}, or file not found. Attempting to initialize with default data. Error: ${error instanceof Error ? error.message : String(error)}`);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(defaultContent, null, 2), 'utf-8');
        } catch (writeError) {
            console.error(`CRITICAL: Failed to write ${fileNameForLog} during recovery initialization. Proceeding with in-memory defaults. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
            return defaultContent.map((item)=>({
                    ...item
                })); // Deep copy
        }
        return defaultContent.map((item)=>({
                ...item
            })); // Deep copy
    }
}
async function initializeUsersFile() {
    const filePath = USERS_FILE;
    const fileNameForLog = 'users.json';
    let usersFromFile = [];
    let needsWrite = false;
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR}. Returning in-memory default users.`, mkdirError);
            return defaultUsers.map((u)=>({
                    ...u
                }));
        }
        // Data directory created, now initialize users.json with defaults
        console.warn(`${fileNameForLog} not found (data directory created). Initializing with default users.`);
        usersFromFile = defaultUsers.map((u)=>({
                ...u
            }));
        needsWrite = true;
    }
    if (!needsWrite) {
        try {
            const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
            const parsedData = JSON.parse(fileContent);
            if (!Array.isArray(parsedData)) {
                console.warn(`${fileNameForLog} content is not a valid array. Initializing with default users.`);
                usersFromFile = defaultUsers.map((u)=>({
                        ...u
                    }));
                needsWrite = true;
            } else if (parsedData.length === 0 && defaultUsers.length > 0) {
                // If the file exists and is an empty array, re-initialize with defaults.
                console.warn(`${fileNameForLog} was an empty array. Initializing with default users.`);
                usersFromFile = defaultUsers.map((u)=>({
                        ...u
                    }));
                needsWrite = true;
            } else {
                usersFromFile = parsedData.map((u)=>({
                        ...u
                    }));
                // Merge missing default users and ensure all users have essential fields
                defaultUsers.forEach((defaultUser)=>{
                    if (!usersFromFile.some((u)=>u.id === defaultUser.id)) {
                        console.warn(`Default user ${defaultUser.username} (ID: ${defaultUser.id}) missing from ${fileNameForLog}. Adding.`);
                        usersFromFile.push({
                            ...defaultUser
                        }); // Add missing default user
                        needsWrite = true;
                    }
                });
                // Enrich all users (including newly added default ones and existing ones)
                // to ensure essential optional fields have defaults
                usersFromFile.forEach((user)=>{
                    let userModified = false;
                    if (user.op === undefined) {
                        user.op = 0; // Default to non-admin
                        userModified = true;
                    }
                    if (!Array.isArray(user.joinedEventIds)) {
                        user.joinedEventIds = [];
                        userModified = true;
                    }
                    if (!user.avatarUrl && user.username) {
                        user.avatarUrl = `https://placehold.co/100x100.png?text=${user.username.substring(0, 2).toUpperCase()}`;
                        userModified = true;
                    }
                    if (user.password === undefined) {
                        const defaultRefUser = defaultUsers.find((du)=>du.id === user.id);
                        if (defaultRefUser && defaultRefUser.password) {
                            user.password = defaultRefUser.password;
                            userModified = true;
                        }
                    }
                    if (userModified) {
                        needsWrite = true; // Flag if any user object was modified
                    }
                });
            }
        } catch (error) {
            console.warn(`Error reading/parsing ${fileNameForLog}, or file not found. Initializing with default users. Error: ${error instanceof Error ? error.message : String(error)}`);
            usersFromFile = defaultUsers.map((u)=>({
                    ...u
                }));
            needsWrite = true;
        }
    }
    if (needsWrite) {
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(usersFromFile, null, 2), 'utf-8');
        } catch (writeError) {
            console.error(`CRITICAL: Failed to write ${fileNameForLog} during initialization/update. Proceeding with in-memory version. Error: ${writeError instanceof Error ? writeError.message : String(writeError)}`);
        // Return the (potentially modified) usersFromFile even if write fails,
        // so the app can proceed with an in-memory version for this session.
        }
    }
    return usersFromFile.map((u)=>({
            ...u
        })); // Return a deep copy
}
// Caching mechanism (simple in-memory cache)
let usersCache = null;
let eventsCache = null;
let announcementsCache = null;
let lastUsersReadTime = 0;
let lastEventsReadTime = 0;
let lastAnnouncementsReadTime = 0;
const CACHE_DURATION = 5000; // 5 seconds, adjust as needed
async function ensureDataFilesInitialized() {
    const currentTime = Date.now();
    // Initialize users
    try {
        if (!usersCache || currentTime - lastUsersReadTime > CACHE_DURATION) {
            usersCache = await initializeUsersFile();
            lastUsersReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeUsersFile in ensureDataFilesInitialized. Falling back to default users for cache.", e);
        usersCache = defaultUsers.map((u)=>({
                ...u
            })); // Fallback to in-memory default
        lastUsersReadTime = currentTime; // Still update time to prevent immediate re-try
    }
    // Initialize events
    try {
        if (!eventsCache || currentTime - lastEventsReadTime > CACHE_DURATION) {
            eventsCache = await initializeFile(EVENTS_FILE, defaultEvents, 'events.json');
            lastEventsReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeFile for events in ensureDataFilesInitialized. Falling back to default events for cache.", e);
        eventsCache = defaultEvents.map((ev)=>({
                ...ev
            })); // Fallback to in-memory default
        lastEventsReadTime = currentTime;
    }
    // Initialize announcements
    try {
        if (!announcementsCache || currentTime - lastAnnouncementsReadTime > CACHE_DURATION) {
            announcementsCache = await initializeFile(ABOUT_USER_FILE, defaultAnnouncements, 'about-user.json');
            lastAnnouncementsReadTime = currentTime;
        }
    } catch (e) {
        console.error("CRITICAL: Error during initializeFile for announcements in ensureDataFilesInitialized. Falling back to default announcements for cache.", e);
        announcementsCache = defaultAnnouncements.map((a)=>({
                ...a
            })); // Fallback to in-memory default
        lastAnnouncementsReadTime = currentTime;
    }
}
// Generic function to read data from a JSON file, ensuring initialization
async function readData(filePath) {
    await ensureDataFilesInitialized(); // Ensures files are created/populated if they don't exist or are empty/invalid
    if (filePath === USERS_FILE && usersCache) {
        return usersCache.map((u)=>({
                ...u
            })); // Return deep copy from cache
    }
    if (filePath === EVENTS_FILE && eventsCache) {
        return eventsCache.map((e)=>({
                ...e
            })); // Return deep copy from cache
    }
    if (filePath === ABOUT_USER_FILE && announcementsCache) {
        return announcementsCache.map((a)=>({
                ...a
            })); // Return deep copy from cache
    }
    // Fallback to direct read if cache is somehow not populated (should not happen after ensureDataFilesInitialized)
    console.warn(`Cache miss for ${filePath} after ensureDataFilesInitialized. This indicates a potential issue in initialization. Reading directly as a fallback.`);
    try {
        const jsonData = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        if (!Array.isArray(data)) {
            console.warn(`Data in ${filePath} is not an array. Returning appropriate default.`);
            if (filePath === USERS_FILE) return defaultUsers.map((u)=>({
                    ...u
                }));
            if (filePath === EVENTS_FILE) return defaultEvents.map((e)=>({
                    ...e
                }));
            if (filePath === ABOUT_USER_FILE) return defaultAnnouncements.map((a)=>({
                    ...a
                }));
            return [];
        }
        return data.map((item)=>({
                ...item
            })); // Return deep copy
    } catch (error) {
        // This block should ideally not be reached if ensureDataFilesInitialized works correctly.
        console.error(`CRITICAL: Unexpected error reading data from ${filePath} during direct read fallback:`, error);
        // Return default data as a last resort if direct read also fails.
        if (filePath === USERS_FILE) return defaultUsers.map((u)=>({
                ...u
            }));
        if (filePath === EVENTS_FILE) return defaultEvents.map((e)=>({
                ...e
            }));
        if (filePath === ABOUT_USER_FILE) return defaultAnnouncements.map((a)=>({
                ...a
            }));
        return [];
    }
}
// Generic function to write data to a JSON file and update cache
async function writeData(filePath, data) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(DATA_DIR);
    } catch (error) {
        // Directory doesn't exist, try to create it
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(DATA_DIR, {
                recursive: true
            });
        } catch (mkdirError) {
            console.error(`CRITICAL: Failed to create data directory ${DATA_DIR} during write for ${filePath}.`, mkdirError);
            throw mkdirError; // Re-throw if directory creation fails, as write will also fail
        }
    }
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, jsonData, 'utf-8');
        // Update cache after successful write
        const currentTime = Date.now();
        if (filePath === USERS_FILE) {
            usersCache = data.map((u)=>({
                    ...u
                })); // Update cache with deep copy
            lastUsersReadTime = currentTime;
        }
        if (filePath === EVENTS_FILE) {
            eventsCache = data.map((e)=>({
                    ...e
                })); // Update cache with deep copy
            lastEventsReadTime = currentTime;
        }
        if (filePath === ABOUT_USER_FILE) {
            announcementsCache = data.map((a)=>({
                    ...a
                })); // Update cache with deep copy
            lastAnnouncementsReadTime = currentTime;
        }
    } catch (error) {
        console.error(`写入数据错误 ${filePath}:`, error);
        throw error; // Re-throw to indicate write failure
    }
}
async function getEvents() {
    return readData(EVENTS_FILE);
}
async function getEventById(id) {
    const events = await readData(EVENTS_FILE);
    return events.find((e)=>e.id === id);
}
async function getEventByCdKey(cdKey) {
    const events = await readData(EVENTS_FILE);
    return events.find((e)=>e.cdKey.toLowerCase() === cdKey.toLowerCase());
}
async function createEvent(eventData, organizerId) {
    const events = await readData(EVENTS_FILE);
    const newEvent = {
        ...eventData,
        id: `event_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        participants: [],
        organizerId
    };
    events.push(newEvent);
    await writeData(EVENTS_FILE, events);
    return {
        ...newEvent
    }; // Return a copy
}
async function joinEvent(userId, eventId, cdKey) {
    let events = await readData(EVENTS_FILE);
    let users = await readData(USERS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const userIndex = users.findIndex((u)=>u.id === userId);
    if (userIndex === -1) return {
        success: false,
        message: '用户未找到。'
    };
    const user = users[userIndex];
    if (event.cdKey.toLowerCase() !== cdKey.toLowerCase()) return {
        success: false,
        message: '无效的活动代码。'
    };
    if (event.participantLimit && event.participants.length >= event.participantLimit) {
        return {
            success: false,
            message: '活动人数已满。'
        };
    }
    if (event.participants.some((p)=>p.id === userId)) {
        // User already in event.participants list
        return {
            success: true,
            message: '您已加入此活动。',
            event: {
                ...event
            }
        };
    }
    // Add user to event's participants list
    const participant = {
        id: user.id,
        username: user.username,
        avatarUrl: user.avatarUrl,
        isCheckedIn: false,
        op: user.op || 0,
        password: user.password // Include password if it's part of Participant type and needed
    };
    event.participants.push(participant);
    // Add eventId to user's joinedEventIds list if not already present
    if (!user.joinedEventIds) {
        user.joinedEventIds = [];
    }
    if (!user.joinedEventIds.includes(eventId)) {
        user.joinedEventIds.push(eventId);
    }
    // Update arrays in memory
    events[eventIndex] = event;
    users[userIndex] = user;
    // Write updated data back to files
    await writeData(EVENTS_FILE, events);
    await writeData(USERS_FILE, users);
    return {
        success: true,
        message: '成功加入活动！',
        event: {
            ...events[eventIndex]
        }
    };
}
async function leaveEvent(userId, eventId) {
    let events = await readData(EVENTS_FILE);
    let users = await readData(USERS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const userIndex = users.findIndex((u)=>u.id === userId);
    if (userIndex === -1) return {
        success: false,
        message: '用户未找到。'
    }; // Should not happen if user is logged in
    const user = users[userIndex];
    const participantIndexInEvent = event.participants.findIndex((p)=>p.id === userId);
    if (participantIndexInEvent === -1) {
        // User is not in event.participants, but check joinedEventIds just in case of inconsistency
        if (user.joinedEventIds && user.joinedEventIds.includes(eventId)) {
            user.joinedEventIds = user.joinedEventIds.filter((id)=>id !== eventId);
            users[userIndex] = user;
            await writeData(USERS_FILE, users); // Write user changes
            return {
                success: true,
                message: '已从您的活动列表中移除。您并未实际参加此活动。',
                event: {
                    ...events[eventIndex]
                }
            };
        }
        return {
            success: false,
            message: '您当前未加入此活动。'
        };
    }
    // Remove user from event's participants list
    event.participants.splice(participantIndexInEvent, 1);
    // Remove eventId from user's joinedEventIds list
    if (user.joinedEventIds) {
        user.joinedEventIds = user.joinedEventIds.filter((id)=>id !== eventId);
    }
    // Update arrays in memory
    events[eventIndex] = event;
    users[userIndex] = user;
    // Write updated data back to files
    await writeData(EVENTS_FILE, events);
    await writeData(USERS_FILE, users);
    return {
        success: true,
        message: '成功离开活动。',
        event: {
            ...events[eventIndex]
        }
    };
}
async function checkInUser(userId, eventId) {
    let events = await readData(EVENTS_FILE);
    const eventIndex = events.findIndex((e)=>e.id === eventId);
    if (eventIndex === -1) return {
        success: false,
        message: '活动未找到。'
    };
    const event = events[eventIndex];
    const participantIndexInEvent = event.participants.findIndex((p)=>p.id === userId);
    if (participantIndexInEvent === -1) return {
        success: false,
        message: '您未报名参加此活动。'
    };
    const participant = event.participants[participantIndexInEvent];
    if (participant.isCheckedIn) return {
        success: true,
        message: '您已签到。'
    };
    // Check if event is current (simplified check: on the same day)
    const eventDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseISO"])(event.date);
    const today = new Date();
    // More precise check could involve time as well, but for now, same day is 'current' for check-in
    const isCurrent = eventDate.getFullYear() === today.getFullYear() && eventDate.getMonth() === today.getMonth() && eventDate.getDate() === today.getDate();
    if (!isCurrent) {
        // This check should ideally be in event-utils and also consider if event has passed based on time
        return {
            success: false,
            message: '此活动的签到尚未开始或已结束。'
        };
    }
    // Update participant's check-in status
    participant.isCheckedIn = true;
    event.participants[participantIndexInEvent] = participant;
    events[eventIndex] = event; // Update the event in the array
    await writeData(EVENTS_FILE, events); // Write changes back to file
    return {
        success: true,
        message: '签到成功！'
    };
}
async function getUserById(userId) {
    const users = await readData(USERS_FILE);
    return users.find((u)=>u.id === userId);
}
async function getUserByUsername(username) {
    const users = await readData(USERS_FILE);
    // Case-insensitive username check
    return users.find((u)=>u.username.toLowerCase() === username.toLowerCase());
}
async function createUser(userData) {
    const users = await readData(USERS_FILE);
    const existingUser = users.find((u)=>u.id === userData.id || u.username.toLowerCase() === userData.username.toLowerCase());
    if (existingUser) {
        // This case should ideally be handled by the caller (e.g., login action)
        // to prompt for password if user exists.
        // For createUser, if called directly and user exists, it might imply an error or unexpected state.
        console.warn(`尝试创建已存在的用户: ${userData.username} (ID: ${userData.id})。返回现有用户。`);
        return {
            ...existingUser
        }; // Return a copy of the existing user
    }
    const newUser = {
        id: userData.id,
        username: userData.username,
        avatarUrl: `https://placehold.co/100x100.png?text=${userData.username.substring(0, 2).toUpperCase()}`,
        op: 0,
        joinedEventIds: [],
        password: userData.password
    };
    users.push(newUser);
    try {
        await writeData(USERS_FILE, users);
    } catch (error) {
        console.error("创建用户时写入数据失败:", error);
    // Optionally, rethrow or handle. For now, we'll let it return the newUser object even if write failed,
    // assuming the cache was updated. The next read will attempt to re-initialize if necessary.
    }
    return {
        ...newUser
    }; // Return a copy
}
async function getAnnouncements() {
    return readData(ABOUT_USER_FILE);
}
const ADMIN_CREATE_EVENT_PASSWORD = "supersecretpassword";
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
/* __next_internal_action_entry_do_not_use__ {"000a3c0459b110a23277041375a40884fd7894f8af":"getSessionUser","002dca974b2b2dbfb79c18855941474a44960be452":"logout","00e40d1753d2794c1a1b8ac004bf987b29297ef20f":"getAnnouncementsAction","40025ab292c69b6d0d92536eed959d4b0a09b21e4a":"getUserProfile","40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa":"checkInAction","408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115":"getEventDetailsAction","40c9e4d36476a8eadf64425c058d41fa958826253d":"leaveEventAction","40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b":"joinEventUsingCdKeyOnlyAction","600a953548022dce1b4763b1e5bc8cc018a547fe4f":"login","600d96d8a257cd66bdea1261d22e70a359d4c7105b":"createEventAction","60d2ba7ffe693511748e8889b5aa0f9b79c91ea589":"joinEventAction"} */ __turbopack_context__.s({
    "checkInAction": (()=>checkInAction),
    "createEventAction": (()=>createEventAction),
    "getAnnouncementsAction": (()=>getAnnouncementsAction),
    "getEventDetailsAction": (()=>getEventDetailsAction),
    "getSessionUser": (()=>getSessionUser),
    "getUserProfile": (()=>getUserProfile),
    "joinEventAction": (()=>joinEventAction),
    "joinEventUsingCdKeyOnlyAction": (()=>joinEventUsingCdKeyOnlyAction),
    "leaveEventAction": (()=>leaveEventAction),
    "login": (()=>login),
    "logout": (()=>logout)
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
const MAX_AGE = 60 * 60 * 24 * 30;
const LoginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    minecraftUsername: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "Minecraft 用户名不能为空。"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "密码不能为空。")
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ login(prevState, formData) {
    try {
        const validatedFields = LoginSchema.safeParse(Object.fromEntries(formData.entries()));
        if (!validatedFields.success) {
            return {
                message: '输入无效。请检查您的用户名和密码。',
                errors: validatedFields.error.flatten().fieldErrors
            };
        }
        const { minecraftUsername, password } = validatedFields.data;
        let user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserByUsername"])(minecraftUsername);
        if (user) {
            // User exists, check password
            if (user.password !== password) {
                return {
                    message: '密码不正确。',
                    errors: {
                        password: [
                            '密码不正确。'
                        ]
                    }
                };
            }
        } else {
            // User does not exist, attempt to register
            const isNameMCValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$namemc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkNameMC"])(minecraftUsername);
            if (!isNameMCValid) {
                return {
                    message: '此 Minecraft 用户名在 NameMC 上无效或无法验证。',
                    errors: {
                        minecraftUsername: [
                            '此 Minecraft 用户名在 NameMC 上无效或无法验证。'
                        ]
                    }
                };
            }
            try {
                // For new users, their ID will be their username, op will be 0 (default)
                user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUser"])({
                    id: minecraftUsername,
                    username: minecraftUsername,
                    password: password
                });
            } catch (error) {
                console.error("登录操作中的用户创建失败 (apiCreateUser):", error);
                return {
                    message: `创建用户时出错: ${error.message || '未知错误'}`,
                    errors: {}
                };
            }
        }
        if (user && user.id) {
            // console.log(`Login successful for user: ${user.username}, ID: ${user.id}. Redirecting to dashboard.`);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])().set('userId', user.id, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                maxAge: MAX_AGE,
                path: '/',
                sameSite: 'lax'
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard');
        } else {
            // This case should ideally not be reached if user creation or lookup is successful
            return {
                message: '登录或注册失败，无法找到或创建用户账户。',
                errors: {}
            };
        }
    } catch (error) {
        if (error.digest?.startsWith('NEXT_REDIRECT')) {
            throw error; // Re-throw Next.js redirect errors
        }
        // Log any other unexpected errors
        console.error("登录服务器操作发生内部错误:", error);
        return {
            message: '登录服务暂时遇到问题，请稍后再试。',
            errors: {}
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
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
        return user || null;
    } catch (error) {
        console.error("获取会话用户失败:", error);
        return null;
    }
}
const CreateEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(3, "活动名称至少需要3个字符。"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().refine((date)=>!isNaN(Date.parse(date)), "无效的日期格式。"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, "描述至少需要10个字符。"),
    participantLimit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].preprocess((val)=>val === "" || val === null || val === undefined ? undefined : Number(val), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().positive().optional()),
    cdKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(4, "活动代码至少需要4个字符。").max(20, "活动代码最多20个字符。"),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().url("无效的图片链接。").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    userPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(1, "您的账户密码不能为空。") // Changed from adminPassword
});
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createEventAction(prevState, formData) {
    const rawFormData = Object.fromEntries(formData.entries());
    const validatedFields = CreateEventSchema.safeParse(rawFormData);
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: '创建活动失败。请检查所填字段。'
        };
    }
    const user = await getSessionUser();
    if (!user) {
        return {
            message: '需要认证才能创建活动。请先登录。',
            errors: {}
        };
    }
    if (user.op !== 1) {
        return {
            message: '您没有创建活动的权限。',
            errors: {}
        };
    }
    // Verify user's own password
    if (!user.password || user.password !== validatedFields.data.userPassword) {
        return {
            errors: {
                ...validatedFields.error?.flatten().fieldErrors,
                userPassword: [
                    '您的账户密码不正确。'
                ]
            },
            message: '创建活动失败。账户密码验证失败。'
        };
    }
    let newEventId;
    try {
        // Exclude userPassword from the data passed to apiCreateEvent
        const { userPassword, ...eventDataForApi } = validatedFields.data;
        const newEvent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEvent"])(eventDataForApi, user.id);
        newEventId = newEvent.id;
    } catch (error) {
        console.error("创建活动错误:", error);
        return {
            message: '在服务器上创建活动失败。请稍后重试。',
            errors: {}
        };
    }
    if (newEventId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/events/${newEventId}`);
    } else {
        return {
            message: '创建活动后未能获取活动ID。',
            errors: {}
        };
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ joinEventAction(eventId, cdKey) {
    const user = await getSessionUser();
    if (!user) {
        return {
            success: false,
            message: '您必须登录才能加入活动。'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEvent"])(user.id, eventId, cdKey);
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
        // Call the existing joinEventAction, which handles all joining logic including CD-Key check
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
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserProfile(userId) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(userId);
    if (!user) {
        console.warn(`用户个人资料未找到: ${userId}`);
        return null;
    }
    const allEvents = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEvents"])(); // This should be an array of Event objects
    const joinedEventIds = user.joinedEventIds || [];
    // Filter events based on joinedEventIds
    const joinedEventsRaw = allEvents.filter((event)=>joinedEventIds.includes(event.id));
    // Fetch all users that are participants in any of the joined events to enrich participant data
    // This avoids N+1 queries if getUserById were called inside the map.
    const participantUserIdsInJoinedEvents = new Set();
    joinedEventsRaw.forEach((event)=>{
        // Ensure event.participants is an array before iterating
        (event.participants || []).forEach((p)=>participantUserIdsInJoinedEvents.add(p.id));
    });
    const allParticipantUsersData = [];
    for (const pId of Array.from(participantUserIdsInJoinedEvents)){
        const pUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserById"])(pId);
        if (pUser) {
            allParticipantUsersData.push(pUser);
        }
    }
    // Enrich participant data within each joined event
    const enrichedJoinedEvents = joinedEventsRaw.map((ev)=>{
        const mainEventParticipantsEnriched = (ev.participants || []).map((p)=>{
            const fullPUser = allParticipantUsersData.find((up)=>up.id === p.id);
            return {
                // Fallbacks ensure type safety even if fullPUser is not found,
                // though ideally it should always be found if data is consistent.
                id: p.id,
                username: fullPUser?.username || p.username || '未知用户',
                avatarUrl: fullPUser?.avatarUrl || p.avatarUrl || `https://placehold.co/40x40.png?text=${(p.username || '??').substring(0, 2)}`,
                isCheckedIn: p.isCheckedIn === true,
                op: fullPUser?.op ?? p.op ?? 0
            };
        });
        return {
            ...ev,
            participants: mainEventParticipantsEnriched
        };
    });
    return {
        user: {
            ...user
        },
        joinedEvents: enrichedJoinedEvents.map((e)=>({
                ...e
            })) // Return a copy
    };
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAnnouncementsAction() {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncements"])();
    } catch (error) {
        console.error("获取公告失败 (action):", error);
        return []; // Return empty array on error
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout,
    getSessionUser,
    createEventAction,
    joinEventAction,
    joinEventUsingCdKeyOnlyAction,
    leaveEventAction,
    checkInAction,
    getEventDetailsAction,
    getUserProfile,
    getAnnouncementsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "600a953548022dce1b4763b1e5bc8cc018a547fe4f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "002dca974b2b2dbfb79c18855941474a44960be452", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "000a3c0459b110a23277041375a40884fd7894f8af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEventAction, "600d96d8a257cd66bdea1261d22e70a359d4c7105b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventAction, "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(joinEventUsingCdKeyOnlyAction, "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(leaveEventAction, "40c9e4d36476a8eadf64425c058d41fa958826253d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkInAction, "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEventDetailsAction, "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "40025ab292c69b6d0d92536eed959d4b0a09b21e4a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAnnouncementsAction, "00e40d1753d2794c1a1b8ac004bf987b29297ef20f", null);
}}),
"[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
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
}}),
"[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAnnouncementsAction"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserProfile"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkInAction"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEventDetailsAction"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["leaveEventAction"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventUsingCdKeyOnlyAction"]),
    "600a953548022dce1b4763b1e5bc8cc018a547fe4f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEventAction"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["joinEventAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "000a3c0459b110a23277041375a40884fd7894f8af": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["000a3c0459b110a23277041375a40884fd7894f8af"]),
    "002dca974b2b2dbfb79c18855941474a44960be452": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["002dca974b2b2dbfb79c18855941474a44960be452"]),
    "00e40d1753d2794c1a1b8ac004bf987b29297ef20f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e40d1753d2794c1a1b8ac004bf987b29297ef20f"]),
    "40025ab292c69b6d0d92536eed959d4b0a09b21e4a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40025ab292c69b6d0d92536eed959d4b0a09b21e4a"]),
    "40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40766e6bbefa8806c7e9dd05fa87964fb4c1214aaa"]),
    "408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["408fbe6c06d0a9b9ff6ad7182cce93d7d9d46cd115"]),
    "40c9e4d36476a8eadf64425c058d41fa958826253d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c9e4d36476a8eadf64425c058d41fa958826253d"]),
    "40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40e364299b5ec1b83d5a2ad8a96878e1f5b0a7d08b"]),
    "600a953548022dce1b4763b1e5bc8cc018a547fe4f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600a953548022dce1b4763b1e5bc8cc018a547fe4f"]),
    "600d96d8a257cd66bdea1261d22e70a359d4c7105b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["600d96d8a257cd66bdea1261d22e70a359d4c7105b"]),
    "60d2ba7ffe693511748e8889b5aa0f9b79c91ea589": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60d2ba7ffe693511748e8889b5aa0f9b79c91ea589"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$create$2d$event$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/create-event/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/src/app/admin/create-event/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/create-event/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/create-event/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/admin/create-event/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/admin/create-event/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/admin/create-event/page.tsx", "default");
}}),
"[project]/src/app/admin/create-event/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$create$2d$event$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/admin/create-event/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$create$2d$event$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/admin/create-event/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$create$2d$event$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/admin/create-event/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/create-event/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__86a2286c._.js.map